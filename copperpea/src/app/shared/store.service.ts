import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class StoreService {
  recipeUrl = 'https://copperbean-54923.firebaseio.com/recipes.json';
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeData() {
    return this.http.put(this.recipeUrl, this.recipeService.getRecipes());
  }

  fetchData() {
    this.http.get<Recipe[]>(this.recipeUrl)
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
