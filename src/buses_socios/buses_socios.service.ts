import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BusesSocios } from './buses_socios.entity';

@Injectable()
export class BusesSociosService {
  constructor(
    @InjectRepository(BusesSocios)
    private readonly repo: Repository<BusesSocios>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ registro: id });
  }

  create(data: Partial<BusesSocios>) {
    return this.repo.save(data);
  }

  update(id: number, data: Partial<BusesSocios>) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
