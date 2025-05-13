import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('buses_socios')
export class BusesSocios {
  @PrimaryGeneratedColumn()
  registro: number;

  @Column()
  socio: string;

  @Column()
  cedula: string;

  @Column()
  numero: string;

  @Column()
  usuario: string;

  @Column()
  clave: string;

  @Column()
  empresa: string;

  @Column()
  placa: string;

  @Column()
  estado: number;

  @Column()
  grupo: string;
}
