import type { IPizza, IPizzaSize, IPizzaTopping } from './pizza'

export interface IOrderState {
  pizza: IPizza
  selectedSize: IPizzaSize
  selectedToppings: IPizzaTopping[]
}
