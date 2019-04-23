import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is simply a test', 'https://media.self.com/photos/57dff8aa7160f6ee33314fdf/4:3/w_768,c_limit/sub-channel-food_recipes.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
