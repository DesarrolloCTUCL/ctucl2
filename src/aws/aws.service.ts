// src/aws/aws.service.ts

import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import * as dotenv from 'dotenv';
dotenv.config();  // Carga las variables de entorno desde un archivo .env
@Injectable()
export class AwsService {
  private rds: AWS.RDS;

  constructor() {
    AWS.config.update({ region: process.env.AWS_REGION });  // Usa la región desde las variables de entorno
    this.rds = new AWS.RDS();  // Inicializa el cliente RDS de AWS SDK
  }

  // Método para obtener las credenciales de conexión de la base de datos RDS
  async getRDSCredentials(dbInstanceIdentifier: string) {
    try {
      const result = await this.rds.describeDBInstances({ DBInstanceIdentifier: dbInstanceIdentifier }).promise();
        // Validar que DBInstances esté definido y tenga al menos una instancia
      if (!result.DBInstances || result.DBInstances.length === 0) {
        throw new Error('No se encontró ninguna instancia de base de datos.');
      }
      const dbInstance = result.DBInstances[0];  // Accede a la primera instancia

      // Verifica si 'Endpoint' existe
      if (!dbInstance.Endpoint) {
        throw new Error('No se encontró el endpoint de la base de datos.');
      }
      // Obtener la dirección y el puerto del endpoint de la base de datos
      const endpoint = dbInstance.Endpoint.Address;
      const port = dbInstance.Endpoint.Port;

      return {
        host: endpoint,
        port: port,
        username: process.env.DB_USERNAME,  // Nombre de usuario desde las variables de entorno
        password: process.env.DB_PASSWORD,  // Contraseña desde las variables de entorno
        database: process.env.DB_NAME,     // Nombre de la base de datos desde las variables de entorno
      };
    } catch (error) {
      console.error('Error al obtener las credenciales de RDS:', error);
      throw new Error('No se pudo obtener las credenciales de RDS.');
    }
  }
}
