import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { DespachosService } from './despachos.service';
import { Despachos } from './despachos.entity';

@Controller('Despachos')
export class DespachosController {
  constructor(private readonly service: DespachosService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Despachos>) {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Despachos>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
