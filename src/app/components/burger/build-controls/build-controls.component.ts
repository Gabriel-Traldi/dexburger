import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/core/burger-builder/burger';

@Component({
  selector: 'app-build-controls',
  templateUrl: './build-controls.component.html',
  styleUrls: ['./build-controls.component.css']
})
export class BuildControlsComponent implements OnInit {

  @Input() disabled: { [key in Ingredient]: number; };
  @Input() purchasable: boolean;
  @Input() price: number;

  @Output() ingredientAdded: EventEmitter<string>;
  @Output() ingredientRemoved: EventEmitter<string>;
  @Output() ordered: EventEmitter<boolean>;

  public controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
  ];

  constructor() {
    this.ingredientAdded = new EventEmitter<string>();
    this.ingredientRemoved = new EventEmitter<string>();
    this.ordered = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
  }

}
