// src/aws/aws.service.ts

import { Injectable } from '@nestjs/common';
import { RDSClient, DescribeDBInstancesCommand } from '@aws-sdk/client-rds';

import * as dotenv from 'dotenv';
dotenv.config();  // Carga las variables de entorno desde un archivo .env
@Injectable()
export class AwsService {
  private rdsClient: RDSClient;

  constructor() {
    this.rdsClient = new RDSClient({ region: process.env.AWS_REGION });
  }

  // Método para obtener las credenciales de conexión de la base de datos RDS
  async getRDSCredentials(dbInstanceIdentifier: string) {
    try {
      const command = new DescribeDBInstancesCommand({
        DBInstanceIdentifier: dbInstanceIdentifier,
      });

      const result = await this.rdsClient.send(command);

      if (!result.DBInstances || result.DBInstances.length === 0) {
        throw new Error('No se encontró ninguna instancia de base de datos.');
      }

      const dbInstance = result.DBInstances[0];

      if (!dbInstance.Endpoint) {
        throw new Error('No se encontró el endpoint de la base de datos.');
      }

      const endpoint = dbInstance.Endpoint.Address;
      const port = dbInstance.Endpoint.Port;

      return {
        host: endpoint,
        port: port,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      };
    } catch (error) {
      console.error('Error al obtener las credenciales de RDS:', error);
      throw new Error('No se pudo obtener las credenciales de RDS.');
    }
  }
}