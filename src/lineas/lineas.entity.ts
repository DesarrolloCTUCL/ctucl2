import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('lineas')
export class Lineas {
  @PrimaryGeneratedColumn()
  IdLineas: number;

  @Column()
  numero_linea: string;

  @Column()
  nombre: string;

  @Column()
  nro_paradas: string;
}
