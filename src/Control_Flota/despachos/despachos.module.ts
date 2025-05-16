import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Despachos} from './despachos.entity';
import { DespachosService } from './despachos.service';
import { DespachosController } from './despachos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Despachos])],
  controllers: [DespachosController],
  providers: [DespachosService],
})
export class DespachosModule {}
