import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('puntos_recarga')
export class PuntosRecarga {
  @PrimaryGeneratedColumn()
  idpuntos_recarga: number;

  @Column()
  local: string;

  @Column()
  nombre: string;

  @Column()
  cedula: string;

  @Column()
  telefono: string;

  @Column()
  correo: string;

  @Column()
  direccion: string;

  @Column()
  usuario: string;

  @Column()
  clave: string;

  @Column()
  equipo: string;

  @Column()
  contrato: string;

  @Column('double')
  latitud: number;

  @Column('double')
  longitud: number;
}
