import type { IPizza, IPizzaSize, IPizzaTopping } from './pizza'

export interface IOrderState {
  pizza: IPizza | null
  selectedSize: IPizzaSize | null
  selectedToppings: IPizzaTopping[]
}

export interface IPaymentDetail {
  label: string
  value: number
}
