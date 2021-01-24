import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burguer-builder',
  templateUrl: './burguer-builder.component.html',
  styleUrls: ['./burguer-builder.component.css']
})
export class BurguerBuilderComponent implements OnInit {

  newBurguer = {
    breadType: '',
    ingredients: [],
    name: 'Burguer name',
    price: 0
  };

  constructor() { }

  addIngredient(type: string): void {
    this.newBurguer.ingredients.push(type);
  }

  changeBreadType(type: string): void {
    this.newBurguer.breadType = type;
  }

  clear() {
    this.newBurguer = {
      breadType: '',
      ingredients: [],
      name: '',
      price: 0
    };
  }

  save() {
    console.log(this.newBurguer)
  }

  ngOnInit(): void {
  }

}
