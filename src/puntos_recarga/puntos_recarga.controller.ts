import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PuntosRecargaService } from './puntos_recarga.service';
import { PuntosRecarga } from './puntos_recarga.entity';

@Controller('puntos-recarga')
export class PuntosRecargaController {
  constructor(private readonly service: PuntosRecargaService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<PuntosRecarga>) {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<PuntosRecarga>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
