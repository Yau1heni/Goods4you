import { describe, it, expect } from 'vitest';
import { cartsReducer, cartsActions } from '@/store';

const mockCartsState = {
  carts: {
    id: 1,
    products: [
      {
        id: 1,
        quantity: 2,
        title: 'Product 1',
        price: 100,
        total: 200,
        discountPercentage: 10,
        discountedTotal: 180,
        thumbnail: 'http://example.com/product1.jpg',
      },
      {
        id: 2,
        quantity: 2,
        title: 'Product 1',
        price: 100,
        total: 200,
        discountPercentage: 10,
        discountedTotal: 180,
        thumbnail: 'http://example.com/product1.jpg',
      },
    ],
    total: 200,
    discountedTotal: 180,
    userId: 123,
    totalProducts: 1,
    totalQuantity: 2,
  },
  drafts: [
    {
      id: 3,
      quantity: 1,
      title: 'Product 2',
      price: 50,
      total: 50,
      discountPercentage: 0,
      discountedTotal: 50,
      thumbnail: 'http://example.com/product2.jpg',
    },
    {
      id: 4,
      quantity: 3,
      title: 'Product 3',
      price: 30,
      total: 90,
      discountPercentage: 5,
      discountedTotal: 85.5,
      thumbnail: 'http://example.com/product3.jpg',
    },
  ],
};

describe('Carts Slice', () => {
  describe('increaseProduct', () => {
    it('should increase the quantity of the product', () => {
      const state = cartsReducer(mockCartsState, cartsActions.increaseProduct({ id: 1 }));
      expect(state.carts?.products[0].quantity).toBe(3);
    });
  });

  describe('decreaseProduct', () => {
    it('should decrease the quantity of the product', () => {
      const state = cartsReducer(mockCartsState, cartsActions.decreaseProduct({ id: 1 }));
      expect(state.carts?.products[0].quantity).toBe(1);
    });
  });

  describe('addProduct', () => {
    it('should add a new product to the cart', () => {
      const newProduct = { id: 3, quantity: 1 };
      const state = cartsReducer(mockCartsState, cartsActions.addProduct({ product: newProduct }));
      expect(state.carts?.products.length).toBe(3);
      expect(state.carts?.products[2]).toEqual(newProduct);
    });
  });

  describe('deleteProduct', () => {
    it('should delete the product from the cart and add it to drafts', () => {
      const state = cartsReducer(mockCartsState, cartsActions.deleteProduct({ id: 1 }));
      expect(state.carts?.products.length).toBe(1);
      expect(state.drafts.length).toBe(3);
      expect(state.drafts[2].id).toBe(1);
    });

    it('should remove product from drafts if isFromDraft is true', () => {
      const newProduct = { id: 3, quantity: 1 };
      const state = cartsReducer(
        mockCartsState,
        cartsActions.addProduct({
          product: newProduct,
          isFromDraft: true,
        })
      );
      expect(state.drafts.length).toBe(1);
    });
  });
});
