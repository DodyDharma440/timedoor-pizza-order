import { defineStore } from 'pinia'
import sizeList from '@/static/size-list.json'
import type { IOrderState, IPaymentDetail } from '@/interfaces/order'
import type { IPizza, IPizzaSize, IPizzaTopping } from '@/interfaces/pizza'

const initialState: IOrderState = {
  pizza: null,
  selectedSize: null,
  selectedToppings: [],
}

export const useOrderStore = defineStore('order', {
  state: () => initialState,
  getters: {
    pizzaPrice({ pizza }) {
      // Final pizza price with or without discount
      return (pizza?.discount.is_active ? pizza.discount.final_price : pizza?.price) ?? 0
    },
    totalPrice(): number {
      // Sum total price based on selected pizza, size, and toppings
      return this.paymentDetails.reduce((prev, curr) => (prev += curr.value), 0)
    },
    paymentDetails({ pizza, selectedSize, selectedToppings }): IPaymentDetail[] {
      // Normalization data selected pizza, selected size, and selected toppings to label-value
      const items: IPaymentDetail[] = []

      if (pizza) {
        items.push({ label: pizza.name, value: this.pizzaPrice })
      }

      if (selectedSize) {
        items.push({ label: `Size - ${selectedSize.name}`, value: selectedSize.extra_price })
      }

      selectedToppings.forEach(({ name, price }) => {
        items.push({
          label: name,
          value: price,
        })
      })

      return items
    },
  },
  actions: {
    setPizza(value: IPizza) {
      this.pizza = value

      // Set default size is `Small` if size is empty
      if (!this.selectedSize) {
        this.selectedSize = sizeList.data[0]
      }

      // Filter selected toppings is only contains in new pizza value
      this.selectedToppings = this.selectedToppings.filter((t) => {
        return value.toppings.includes(t.id)
      })
    },
    setSelectedSize(value: IPizzaSize) {
      this.selectedSize = value
    },
    isToppingSelected(toppingId: number): boolean {
      // Check is topping selected in state
      return this.selectedToppings.some((t) => t.id === toppingId)
    },
    toggleSelectTopping(value: IPizzaTopping): void {
      const isSelected = this.isToppingSelected(value.id)
      if (isSelected) {
        // Remove value if selected by filter and include only unequal id
        this.selectedToppings = this.selectedToppings.filter((v) => v.id !== value.id)
      } else {
        // Add topping value in last position
        this.selectedToppings = [...this.selectedToppings, value]
      }
    },
    reset() {
      this.pizza = null
      this.selectedSize = null
      this.selectedToppings = []
    },
  },
})
