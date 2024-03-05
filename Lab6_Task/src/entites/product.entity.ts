import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

//import * as bcrypt from 'bcrypt';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  price: number;

  @Column({ nullable: false })
  brand: string;
}
