import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paradas } from './paradas.entity';

@Injectable()
export class ParadasService {
  constructor(
    @InjectRepository(Paradas)
    private readonly repo: Repository<Paradas>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ Idparadas: id });
  }

  create(data: Partial<Paradas>) {
    return this.repo.save(data);
  }

  update(id: number, data: Partial<Paradas>) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
