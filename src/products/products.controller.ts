import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { updateProduct } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {

	constructor(private readonly productsService: ProductsService) {

	}


	@Get()
	getAll(): Promise<Product[]> {
		return this.productsService.getAll()
	}

	@Get(':id')
	getOne(@Param('id') id: string): Promise<Product> {
		return this.productsService.getOne(id)
	}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	@Header('Cache-Control', 'none')
	create(@Body() product: CreateProductDto): Promise<Product> {
		return this.productsService.create(product)
	}


	@Delete(':id')
	deleteElement(@Param() id: string): Promise<Product> {
		return this.productsService.remove(id)
	}

	@Put(':id')
	update(@Body() update: updateProduct, @Param('id') id: string): Promise<Product> {
		return this.productsService.update(id, update)
	}
}
