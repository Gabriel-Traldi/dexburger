import { Component, OnInit } from '@angular/core';
import { Burger, Ingredient } from './burger';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

@Component({
  selector: 'app-burger-builder',
  templateUrl: './burger-builder.component.html',
  styleUrls: ['./burger-builder.component.css']
})
export class BurgerBuilderComponent {

  public burger: Burger;
  constructor() {
    this.loadInitialValues()
  }

  private loadInitialValues() {
    this.burger = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4,
      purchasable: false,
      purchasing: false
    }
  }

  private updatePurchase(ingredients: { [key in Ingredient]: number }) {
    const sum = Object.keys(ingredients)
      .map((igKey: Ingredient) => ingredients[igKey])
      .reduce((sum, el) => {
        return sum + el
      }, 0);
    this.burger = {
      ...this.burger,
      purchasable: sum > 0
    };
  }

  public addIngredient(type: Ingredient) {
    const oldCount = this.burger.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngredients = {
      ...this.burger.ingredients
    }
    updateIngredients[type] = updateCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.burger.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.burger = {
      ...this.burger,
      totalPrice: newPrice,
      ingredients: updateIngredients,
    };
    this.updatePurchase(updateIngredients);
  }

  public purchase() {
    console.log('you order:');
    console.group('A delicious burger with the following ingredients:');
    Object.keys(this.burger.ingredients)
      .forEach(ingredient => {
        console.log(ingredient, this.burger.ingredients[ingredient])
      });
    console.log('Total Price:', this.burger.totalPrice.toFixed(2));
    console.groupEnd();
    alert('check the log');
    this.loadInitialValues();
  }

  public removeIngredient(type: Ingredient) {
    const oldCount = this.burger.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updateIngredients = {
      ...this.burger.ingredients
    };
    updateIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.burger.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.burger = {
      ...this.burger,
      totalPrice: newPrice,
      ingredients: updateIngredients,
    };
    this.updatePurchase(updateIngredients);
  }

}
