import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  quantity: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const find = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.cartItem[find].quantity += 1;
      } else {
        const tempvar = { ...action.payload, quantity: 1 };
        state.cartItem.push(tempvar);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    remove(state, action) {
      state.cartItem.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItem.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItem = nextCartItems;
        }

        return state;
      });
    },

    increase(state, action) {
      state.quantity += 1;
    },
    decrease(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItem[itemIndex].quantity > 1) {
        state.cartItem[itemIndex].quantity -= 1;
      } else if (state.cartItem[itemIndex].quantity === 1) {
        const nextCartItems = state.cartItem.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItem = nextCartItems;
      }
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItem.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.quantity = quantity;
      state.total = total;
    },
  },
});

export const { add, remove, increase, decrease, getTotals } = cartSlice.actions;

export default cartSlice.reducer;
