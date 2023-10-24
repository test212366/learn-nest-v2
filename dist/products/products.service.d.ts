import { Model } from "mongoose";
import { CreateProductDto } from "./dto/create-product.dto";
import { updateProduct } from "./dto/update-product.dto";
import { Product, ProductDocument } from "./schemas/product.schema";
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    getAll(): Promise<Product[]>;
    getOne(id: string): Promise<Product>;
    create(product: CreateProductDto): Promise<Product>;
    remove(id: String): Promise<Product>;
    update(id: string, product: updateProduct): Promise<Product>;
}
