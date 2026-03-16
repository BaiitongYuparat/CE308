import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CartItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
}

interface CartState {
    items: CartItem[];
    totalAmount: number;
}


const initialState: CartState = {
    items: [],
    totalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       addItem (state, action: PayloadAction<CartItem>) => {

       }
    }

})