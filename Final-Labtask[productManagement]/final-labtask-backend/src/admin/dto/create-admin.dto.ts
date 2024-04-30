import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateAdminDto {
  @IsNotEmpty({ message: 'empty value! Name cannot be empty' })
  @IsString()
  productName: string;

  @IsNotEmpty({ message: 'empty value! brand cannot be empty' })
  @IsString()
  brand: string;

  @IsNotEmpty({ message: 'empty value! price cannot be empty' })
  @IsNumber()
  price: number;

  @IsNotEmpty({ message: 'empty value! quantity cannot be empty' })
  @IsNumber()
  quantity: number;
}
