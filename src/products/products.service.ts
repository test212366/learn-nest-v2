import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateProductDto } from "./dto/create-product.dto";
import { updateProduct } from "./dto/update-product.dto";
import { Product, ProductDocument } from "./schemas/product.schema";

@Injectable()
export class ProductsService {
	constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {

	}

	async getAll(): Promise<Product[]> {
		return this.productModel.find().exec()
	}

	async getOne(id: string): Promise<Product> {
		return this.productModel.findById(id)
	}

	async create(product: CreateProductDto): Promise<Product> {
		const newProduct = new this.productModel(product)
		return newProduct.save()
	}
	async remove(id: String): Promise<Product> {
		return this.productModel.findByIdAndRemove({ id })
	}

	async update(id: string, product: updateProduct): Promise<Product> {
		return this.productModel.findByIdAndUpdate(id, product, { new: true })
	}


}