import { Client } from 'src/modules/clients/schemas/client.schema';
import { Product } from 'src/modules/products/schemas/products.schema';

export class CreateOrderDto {
  client: Client;
  products: Product[];
  price?: number;
}
