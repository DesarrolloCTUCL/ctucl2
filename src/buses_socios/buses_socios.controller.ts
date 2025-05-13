import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BusesSociosService } from './buses_socios.service';
import { BusesSocios } from './buses_socios.entity';

@Controller('buses-socios')
export class BusesSociosController {
  constructor(private readonly service: BusesSociosService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<BusesSocios>) {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<BusesSocios>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
