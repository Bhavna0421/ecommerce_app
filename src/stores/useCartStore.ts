import { create } from "zustand"
import { persist } from "zustand/middleware"

import { Product } from "../types"

interface State {
	cart: Product[]
	totalItems: number
	totalPrice: number
}

interface Actions {
	addToCart: (Item: Product) => void
	removeFromCart: (Item: Product) => void
	increment?: any;
}

const INITIAL_STATE: State = {
	cart: [],
	totalItems: 0,
	totalPrice: 0,
}

export const useCartStore = create(
	persist<State & Actions>(
		(set, get) => ({
			cart: INITIAL_STATE.cart,
			totalItems: INITIAL_STATE.totalItems,
			totalPrice: INITIAL_STATE.totalPrice,
			addToCart: (product: Product) => {
				const cart = get().cart
				console.log("cart",cart)
				const cartItem = cart.find(item => item.id === product.id)

				if (cartItem) {
					console.log(cartItem.quantity)
					const updatedCart = cart.map(item =>
						item.id === product.id ? { ...item, quantity: (item.quantity as number) + 1 } : item
					)
					set(state => ({
						cart: updatedCart,
						totalItems: state.totalItems + 1,
						totalPrice: state.totalPrice + product.price,
					}))
					console.log("updatedCart>>>>>>>",updatedCart)
				} else {
					const updatedCart = [...cart, { ...product, quantity: 1 }]

					set(state => ({
						cart: updatedCart,
						totalItems: state.totalItems + 1,
						totalPrice: state.totalPrice + product.price,
					}))
				}
			},
			removeFromCart: (product: Product) => {
				set(state => ({
					cart: state.cart.filter(item => item.id !== product.id),
					totalItems: state.totalItems - 1,
					totalPrice: state.totalPrice - product.price,
				}))
			},
			
		}),
		{
			name: "cart-storage",
			
		}
	)
)
