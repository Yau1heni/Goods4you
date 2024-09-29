export type Products<T = Product[]> = {
    products: T;
    total: number;
    skip: number;
    limit: number;
}

export type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    thumbnail: string;
    images: string[];
}

export type UpdatedProducts = Product & { quantity: number }

type Meta = {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}

type Review = {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

type Dimensions = {
    width: number;
    height: number;
    depth: number;
}