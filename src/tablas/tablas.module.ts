import { Module } from '@nestjs/common';
import { TablasService } from './tablas.service';
import { TablasController } from './tablas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/tabla.entity';  // Asegúrate de crear la entidad correspondiente

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Importa el módulo TypeOrm y la entidad que usarás
  providers: [TablasService],
  controllers: [TablasController],
})
export class TablasModule {}
