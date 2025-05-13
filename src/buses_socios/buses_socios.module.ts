import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusesSocios } from './buses_socios.entity';
import { BusesSociosService } from './buses_socios.service';
import { BusesSociosController } from './buses_socios.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BusesSocios])],
  controllers: [BusesSociosController],
  providers: [BusesSociosService],
})
export class BusesSociosModule {}
