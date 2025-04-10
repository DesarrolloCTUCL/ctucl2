import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/tabla.entity';  // Asegúrate de crear la entidad correspondiente

@Injectable()
export class TablasService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Método para mostrar todas las tablas (consulta SQL)
  async showTables(): Promise<any> {
    const query = 'SHOW TABLES;';
    return await this.userRepository.query(query);
  }
}
