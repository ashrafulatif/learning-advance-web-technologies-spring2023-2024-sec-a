import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  pId: number;

  @IsString({ message: 'valid name is required' })
  @IsNotEmpty()
  name: string;

  brand: string;

  @IsNumber()
  price: number;
}
