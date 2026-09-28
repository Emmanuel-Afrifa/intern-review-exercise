type CartItem = {
    productId: string; 
    unitPrice: number; 
    quantity: number
};

const calculateCartItems = (items: CartItem[]): number => {
    const totalCartPrice = items.reduce((accumulator: number, currentItem: CartItem) => {
        return accumulator + (currentItem.unitPrice * currentItem.quantity)
    }, 0)

    return totalCartPrice
} 

export default calculateCartItems