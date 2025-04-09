// src/aws/aws.module.ts

import { Module } from '@nestjs/common';
import { AwsService } from './aws.service';

@Module({
  providers: [AwsService],
  exports: [AwsService],  // Exportamos el servicio para poder usarlo en otros módulos
})
export class AwsModule {}
