import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { LineasService } from './lineas.service';
import { Lineas } from './lineas.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('Lineas')
@UseGuards(AuthGuard('jwt')) // 👈 Aplica protección a todo el controlador
export class LineasController {
  constructor(private readonly service: LineasService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Lineas>) {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Lineas>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
