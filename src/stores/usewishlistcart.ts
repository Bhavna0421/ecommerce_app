import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../types";

interface State {
  cart: Product[];
  totalItems: number;
}

interface Actions {
  wishlist: (Item: Product) => void;
  removeFromCart: (Item: Product) => void;
}

const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
};

export const usewishlistStore = create(
  persist<State & Actions>(
    (set, get) => ({
      cart: INITIAL_STATE.cart,
      totalItems: INITIAL_STATE.totalItems,

      wishlist: (product: Product) => {
        const cart = get().cart;

        const cartItem = cart.find((item) => item.id === product.id);

        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.id === product.id ? item : item
          );
          set(() => ({
            cart: updatedCart,
          }));
        } else {
          const updatedCart = [...cart, { ...product, quantity: 1 }];

          set(() => ({
            cart: updatedCart,
          }));
        }
      },
      removeFromCart: (product: Product) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== product.id),
          totalItems: state.totalItems - 1,
        }));
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
