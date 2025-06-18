export interface IPizzaDiscount {
  is_active: boolean
  final_price: number
}

export interface IPizza {
  id: number
  name: string
  price: number
  discount: IPizzaDiscount
  toppings: number[]
}
