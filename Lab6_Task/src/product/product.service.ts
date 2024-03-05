import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Repository } from 'typeorm';
import { Product } from 'src/entites/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  // private products = [
  //   {
  //     id: 1,
  //     name: 'Mobile',
  //     brand: 'samsung',
  //     price: 1000,
  //   },
  //   {
  //     id: 2,
  //     name: 'Smart Phone',
  //     brand: 'Apple',
  //     price: 1000,
  //   },
  //   {
  //     id: 3,
  //     name: 'TV',
  //     brand: 'Sony',
  //     price: 1000,
  //   },
  // ];

  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}
  async getAllProduct() {
    // return this.products;
    return await this.productRepo.find({});
  }
  //create new product //push into the array
  async CreateProduct(createProductDto: CreateProductDto) {
    // const lastId = [...this.products].sort((a, b) => b.id - a.id);
    // const newProduct = {
    //   id: lastId[0].id + 1,
    //   ...createProductDto,
    // };
    // this.products.push(newProduct);
    // return newProduct;

    const product = await this.productRepo.create(createProductDto);
    return await this.productRepo.save(product);
  }
  //get the product from the array
  // getProductId(id: number) {
  //   const product = this.products.find((p) => p.id === id);
  //   if (!product) {
  //     console.log(`Product with ID ${id} not found`);
  //     throw new NotFoundException(`Product with ${id} is not found`);
  //   }
  //   return product;
  // }
  // updateProductInfo(id: string, productUpdate: CreateProductDto) {
  //   return { id, ...productUpdate };
  // }
}
