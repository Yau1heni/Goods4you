import { instance } from '../axios-config/axios-config.ts';
import { Cart, Carts, UpdateCartPayload } from '@/types';

export const cartsServices = {
  async getCarts(data: { userId: number }): Promise<Cart> {
    const response = await instance.get<Carts>(`/carts/user/${data.userId}`);
    return response.data.carts[0];
  },
  async updateCart(data: UpdateCartPayload): Promise<Cart> {
    const payload = {
      merge: false,
      products: data.products,
    };
    const response = await instance.put<Cart>(`/carts/${data.id}`, payload);
    return response.data;
  },
};
