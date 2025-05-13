import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PuntosRecarga } from './puntos_recarga.entity';
import { PuntosRecargaService } from './puntos_recarga.service';
import { PuntosRecargaController } from './puntos_recarga.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PuntosRecarga])],
  controllers: [PuntosRecargaController],
  providers: [PuntosRecargaService],
})
export class PuntosRecargaModule {}
