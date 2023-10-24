import { CreateProductDto } from './dto/create-product.dto';
import { updateProduct } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getAll(): Promise<Product[]>;
    getOne(id: string): Promise<Product>;
    create(product: CreateProductDto): Promise<Product>;
    deleteElement(id: string): Promise<Product>;
    update(update: updateProduct, id: string): Promise<Product>;
}
