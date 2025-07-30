import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     cartItems: [],
//     totalQuantity: 0,
//     totalPrice: 0,
// };

const cartSlice = createSlice({
    name: "cart",
    initialState: { items: [] },
    reducers: {
        addToCart: (state, action) => {
            const item = {
                ...action.payload,
                id: action.payload._id || action.payload.id, // normalize
            };

            const price = typeof item.price === "string"
                ? parseFloat(item.price.replace(/[^\d.-]/g, ""))
                : item.price;

            const existingItem = state.items.find((i) => i.id === item.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1, price });
            }
        },
        updateQuantity: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.amount;
                if (existingItem.quantity <= 0) {
                    state.items = state.items.filter(
                        (item) => item.id !== action.payload.id
                    );
                }
            }
            state.totalQuantity = state.items.length;
            state.totalPrice = state.items.reduce(
                (total, item) => total + item.price * item.quantity, 0
            );
        },
        removeFromCart: (state, action) => {
            const idToRemove = action.payload.toString().trim();
            //console.log("Removing ID:", idToRemove);
            //console.log("Before removal:", state.items.map(i => i._id || i.id));
            state.items = state.items.filter(
                 (item) => item._id?.toString() !== idToRemove && item.id?.toString() !== idToRemove
                // (item) => item.id !== action.payload.id && item._id !== action.payload.id
            );
            //console.log("After removal:", state.items.map(i => i._id || i.id));
        },
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },

    },
});
export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;