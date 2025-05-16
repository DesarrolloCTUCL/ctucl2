import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Despachos } from './despachos.entity';

@Injectable()
export class DespachosService {
  constructor(
    @InjectRepository(Despachos)
    private readonly repo: Repository<Despachos>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ Iddespacho: id });
  }

  create(data: Partial<Despachos>) {
    return this.repo.save(data);
  }

  update(id: number, data: Partial<Despachos>) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
