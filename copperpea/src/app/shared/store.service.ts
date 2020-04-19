import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from "../auth/auth.service";
import { Recipe } from "../recipes/recipe.model";


@Injectable()
export class StoreService {
  recipeUrl = 'https://copperbean-54923.firebaseio.com/recipes.json';
  constructor(private http: HttpClient, private recipeService: RecipeService,
              private authService: AuthService) {}

  storeData() {
    const token = this.authService.getToken();
    return this.http.put(this.recipeUrl + "?auth=" + token, 
      this.recipeService.getRecipes());
  }

  fetchData() {
    const token = this.authService.getToken();
    this.http.get<Recipe[]>(this.recipeUrl + "?auth=" + token)
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
