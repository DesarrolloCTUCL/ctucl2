import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('paradas')
export class Paradas {
  @PrimaryGeneratedColumn()
  Idparadas: number;

  @Column()
  Nombre: string;

  @Column()
  Latitud: string;

  @Column()
  Longitud: string;

  @Column()
  Direccion: string;

  @Column()
  Ruta: string;

  @Column()
  Radio: number;

  @Column()
  Estado: number;
}
