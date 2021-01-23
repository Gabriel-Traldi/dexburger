export interface Burger {
  ingredients: {
    [key in Ingredient]: number;
  },
  totalPrice: number;
  purchasable: boolean;
  purchasing: boolean;
}

export type Ingredient = 'salad' | 'bacon' | 'cheese' | 'meat'
