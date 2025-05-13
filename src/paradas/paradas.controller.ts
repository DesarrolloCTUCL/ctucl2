import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ParadasService } from './paradas.service';
import { Paradas } from './paradas.entity';

@Controller('Paradas')
export class ParadasController {
  constructor(private readonly service: ParadasService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Paradas>) {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Paradas>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
