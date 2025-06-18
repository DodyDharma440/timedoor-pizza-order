import { defineStore } from 'pinia'
import type { IOrderState, IPaymentDetail } from '@/interfaces/order'
import type { IPizza, IPizzaSize, IPizzaTopping } from '@/interfaces/pizza'

export const useOrderStore = defineStore('order', {
  state: () =>
    ({
      pizza: null,
      selectedSize: null,
      selectedToppings: [],
    }) as IOrderState,
  getters: {
    pizzaPrice({ pizza }) {
      return (pizza?.discount.is_active ? pizza.discount.final_price : pizza?.price) ?? 0
    },
    totalPrice(): number {
      return this.paymentDetails.reduce((prev, curr) => (prev += curr.value), 0)
    },
    paymentDetails({ pizza, selectedSize, selectedToppings }): IPaymentDetail[] {
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
      this.selectedToppings = this.selectedToppings.filter((t) => {
        return value.toppings.includes(t.id)
      })
    },
    setSelectedSize(value: IPizzaSize) {
      this.selectedSize = value
    },
    isToppingSelected(toppingId: number): boolean {
      return this.selectedToppings.some((t) => t.id === toppingId)
    },
    toggleSelectTopping(value: IPizzaTopping): void {
      const isSelected = this.isToppingSelected(value.id)
      if (isSelected) {
        this.selectedToppings = this.selectedToppings.filter((v) => v.id !== value.id)
      } else {
        this.selectedToppings = [...this.selectedToppings, value]
      }
    },
  },
})
