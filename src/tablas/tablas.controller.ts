import { Controller, Get } from '@nestjs/common';
import { TablasService } from './tablas.service';

@Controller('tablas')
export class TablasController {
  constructor(private readonly tablasService: TablasService) {}

  // Ruta para obtener las tablas de la base de datos
  @Get('list')
  async getTables() {
    return await this.tablasService.showTables();
  }
}
