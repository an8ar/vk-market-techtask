import { Product } from '../product';
export type CartProduct = Pick<Product, 'id' | 'title' | 'price'> & {
  quantity: number;
};

export type RemovePayload = Pick<Product, 'id'>;
export interface AddPayload extends CartProduct {}

export interface CartState {
  products: CartProduct[];
  totalPrice: number;
  totalQuantity: number;
}
