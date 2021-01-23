import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/burger-builder/burger';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent {

  keys = Object.keys;

  @Input() ingredients: { [key in Ingredient]: number; }

  constructor() { }

  public transformedIngredients() {
    return Object.keys(this.ingredients)
      .map(ingredientKey => {
        return [...Array(this.ingredients[ingredientKey])].map(() => ingredientKey)
      })
      .reduce((arr, el) => {
        return arr.concat(el)
      }, [])
  }

}
