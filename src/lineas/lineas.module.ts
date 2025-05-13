import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lineas } from './lineas.entity';
import { LineasService } from './lineas.service';
import { LineasController } from './lineas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Lineas])],
  controllers: [LineasController],
  providers: [LineasService],
})
export class LineasModule {}
