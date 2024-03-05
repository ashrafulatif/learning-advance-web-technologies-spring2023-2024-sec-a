import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  //Patch,
  //ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProduct() {
    return this.productService.getAllProduct();
  }
  // @Get(':pId')
  // getProductId(@Param('pId', ParseIntPipe) pId: number) {
  //   return this.productService.getProductId(pId);
  // }
  @Post()
  CreateProduct(@Body(ValidationPipe) createProductDto: CreateProductDto) {
    return this.productService.CreateProduct(createProductDto);
  }
  // @Patch(':pId')
  // updateProductInfo(
  //   @Param('pId') id: string,
  //   @Body() productUpdate: CreateProductDto,
  // ) {
  //   return this.productService.updateProductInfo(id, productUpdate);
  // }
}
