import { describe, it, expect } from 'vitest'; 
import calculateCartItems from './calculateCartItems.ts';

const mockCartItemsData = [
    {productId: "product1", unitPrice: 1, quantity: 5},
    {productId: "product1", unitPrice: 2, quantity: 2},
    {productId: "product1", unitPrice: 10, quantity: 5},
    {productId: "product1", unitPrice: 5, quantity: 3},
]

describe('Testing calculateCartItems() function', () => {
    it('Calculation works correctly for multiply cart items', () => {
        const totalPrice = calculateCartItems(mockCartItemsData);
        expect(totalPrice).toBe(74);
    });

    it('Calculation works correctly for only on cart item', () => {
        const totalPrice = calculateCartItems(mockCartItemsData.splice(0,1));
        expect(totalPrice).toBe(5);
    });
});
