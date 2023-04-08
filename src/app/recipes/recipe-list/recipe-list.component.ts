import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a simple test', 
    'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg?resize=1200:*'),
    new Recipe('A New test Recipe', 'This is a simple test', 
    'https://www.seriouseats.com/thmb/UwrB6s6MgT_P1XmQPiMyUXWgWWc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-new-orleans-muffuletta-recipe-Hero1-ee95576a16584f298d6abe7fac80712b.jpg')
 
  ]

  constructor(){}

}
