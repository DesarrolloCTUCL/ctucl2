import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('despachos')
export class Despachos {
  @PrimaryGeneratedColumn()
  Iddespacho: number;

  @Column()
  BusID: string;

  @Column()
  Fecha: string;

  @Column()
  Itinerario: string;

  @Column()
  Linea: string;

  @Column()
  Conductor: string;

  @Column()
  Despachador: string;

  @Column()
  Observaciones: string;
}
