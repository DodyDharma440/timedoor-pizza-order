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

export interface IPizzaSize {
  id: number
  name: string
  extra_price: number
}
