import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent {

  ingredients: Ingredient[] = []

  constructor(){}

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient)
  }

}
