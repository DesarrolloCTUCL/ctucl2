import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AwsModule } from './aws/aws.module';  // Importa el módulo de AWS
import { AwsService } from './aws/aws.service';  // Importa el servicio de AWS
import { TablasModule } from './tablas/tablas.module';
import { PuntosRecargaModule } from './puntos_recarga/puntos_recarga.module';
import { BusesSociosModule } from './buses_socios/buses_socios.module';
import { ParadasModule } from './paradas/paradas.module';
import { LineasModule } from './lineas/lineas.module';
import { AuthModule } from './autenticacion/auth.module';
import { DespachosModule } from './Control_Flota/despachos/despachos.module';
@Module({
  imports: [
    AwsModule,
    TypeOrmModule.forRootAsync({
      imports: [AwsModule],
      useFactory: async (awsService: AwsService) => {
        const dbCredentials = await awsService.getRDSCredentials('ctucl');

        return {
          type: 'mysql',
          host: dbCredentials.host,
          port: dbCredentials.port,
          username: dbCredentials.username,
          password: dbCredentials.password,
          database: dbCredentials.database,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: false,
        };
      },
      inject: [AwsService],
    }),
    TablasModule,
    PuntosRecargaModule,
    BusesSociosModule,
    ParadasModule,
    LineasModule,
    AuthModule,
    DespachosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
