import { Component, OnInit } from '@angular/core';
import { BurguerService } from '../services/burguer.service';

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

  constructor(private burguerService: BurguerService) { }

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
    this.newBurguer['id'] = +new Date;
    this.burguerService.addBurguer(this.newBurguer);
    alert('Burguer added to menu');
    this.clear();
  }

  ngOnInit(): void {
  }

}
