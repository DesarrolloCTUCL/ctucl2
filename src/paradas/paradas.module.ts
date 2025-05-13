import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paradas } from './paradas.entity';
import { ParadasService } from './paradas.service';
import { ParadasController } from './paradas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Paradas])],
  controllers: [ParadasController],
  providers: [ParadasService],
})
export class ParadasModule {}
