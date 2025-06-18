import { defineStore } from 'pinia'
import type { IOrderState } from '@/interfaces/order'
import pizzaList from '@/static/pizza-list.json'
import sizeList from '@/static/size-list.json'
import type { IPizza, IPizzaSize, IPizzaTopping } from '@/interfaces/pizza'

export const useOrderStore = defineStore('order', {
  state: () =>
    ({
      pizza: pizzaList.data[0],
      selectedSize: sizeList.data[0],
      selectedToppings: [],
    }) as IOrderState,
  getters: {
    pizzaPrice({ pizza }) {
      return pizza.discount.is_active ? pizza.discount.final_price : pizza.price
    },
    totalPrice(): number {
      return this.paymentDetails.reduce((prev, curr) => (prev += curr.value), 0)
    },
    paymentDetails({
      pizza,
      selectedSize,
      selectedToppings,
    }): Array<{ label: string; value: number }> {
      return [
        { label: pizza.name, value: this.pizzaPrice },
        { label: `Size - ${selectedSize.name}`, value: this.selectedSize.extra_price },
        ...selectedToppings.map(({ name, price }) => ({
          label: name,
          value: price,
        })),
      ]
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
