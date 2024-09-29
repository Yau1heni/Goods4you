import {instance} from '../axios-config/axios-config.ts'
import {Cart, Carts} from "@/types";

export const cartsServices = {
    getCarts(data: { userId: string }): Promise<Cart> {
        return instance.get<Carts>(`/carts/user/${data.userId}`)
            .then((response) => {
                return response.data.carts[0];
            });
    },
};