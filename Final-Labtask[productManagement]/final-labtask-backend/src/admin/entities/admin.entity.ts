import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('productInfos')
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  productName: string;

  @Column({ nullable: false })
  brand: string;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: false })
  quantity: number;
}
