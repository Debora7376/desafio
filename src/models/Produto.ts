import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('produtos')
export default class Produto {

  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  nome_do_produto: string;
  @Column()
  fabricante: string;
  @Column()
  quantidade_em_estoque: number;
  @Column()
  valor: number;

}