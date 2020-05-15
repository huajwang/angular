import { Component, OnInit } from '@angular/core';
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";
import { StoreService } from "../shared/store.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService, private storeService: StoreService) { }

  ngOnInit(): void {
    console.log("... recipes component init.......")
    this.storeService.fetchData();
    this.recipeService.recipeSelected
    .subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }

}
