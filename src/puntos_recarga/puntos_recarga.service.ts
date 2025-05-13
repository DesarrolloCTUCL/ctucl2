import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PuntosRecarga } from './puntos_recarga.entity';

@Injectable()
export class PuntosRecargaService {
  constructor(
    @InjectRepository(PuntosRecarga)
    private readonly repo: Repository<PuntosRecarga>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ idpuntos_recarga: id });
  }

  create(data: Partial<PuntosRecarga>) {
    return this.repo.save(data);
  }

  update(id: number, data: Partial<PuntosRecarga>) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
