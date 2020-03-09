import { Component, OnInit } from '@angular/core';
import { Ingrediendt } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingrediendt[] = [
    new Ingrediendt('Apple',5),
    new Ingrediendt('Tomatoes',10)
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingrediendt) {
    this.ingredients.push(ingredient);
  }

}
