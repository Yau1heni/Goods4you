export type Carts = {
    carts: Cart[];
    total: number;
    skip: number;
    limit: number;
}

export type Cart = {
    id: number;
    products: CartProduct[]
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}

export type CartProduct = {
    id: number;
    quantity: number;
    title?: string;
    price?: number;
    total?: number;
    discountPercentage?: number;
    discountedTotal?: number;
    thumbnail?: string;
}

export type UpdateCartPayload = {
    id: number;
    products: CartProduct[];
}

export enum UpdateMode {
    INCREASE = 'increase',
    DECREASE = 'decrease',
    DELETE = 'delete',
}