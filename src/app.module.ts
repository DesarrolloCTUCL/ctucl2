import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AwsModule } from './aws/aws.module';  // Importa el módulo de AWS
import { AwsService } from './aws/aws.service';  // Importa el servicio de AWS

@Module({
  imports: [
    AwsModule,  // Importa AwsModule
    TypeOrmModule.forRootAsync({
      imports: [AwsModule],  // Asegúrate de importar AwsModule para inyectar AwsService
      useFactory: async (awsService: AwsService) => {
        const dbCredentials = await awsService.getRDSCredentials('ctucl');  // Obtén las credenciales

        return {
          type: 'mysql',  // Usa el tipo MySQL (o el que corresponda con tu base de datos)
          host: dbCredentials.host,
          port: dbCredentials.port,
          username: dbCredentials.username,
          password: dbCredentials.password,
          database: dbCredentials.database,
          entities: [/* tus entidades */],
          synchronize: true,  // Solo para desarrollo, desactívalo en producción
        };
      },
      inject: [AwsService],  // Inyectamos AwsService en la configuración de TypeORM
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
