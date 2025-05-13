import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lineas } from './lineas.entity';

@Injectable()
export class LineasService {
  constructor(
    @InjectRepository(Lineas)
    private readonly repo: Repository<Lineas>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ IdLineas: id });
  }

  create(data: Partial<Lineas>) {
    return this.repo.save(data);
  }

  update(id: number, data: Partial<Lineas>) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
