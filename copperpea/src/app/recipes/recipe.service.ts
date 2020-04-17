import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Beef Pasta', 'Traditional British men',
    'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',
    [
      new Ingredient("sugar", 2),
      new Ingredient("egg", 8)
    ]),
    new Recipe('Hamberger', 'Traditional British men',
    'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',
    [
      new Ingredient('milk', 3),
      new Ingredient('meat', 5)
    ]),
    new Recipe('Noodle Soup', 'Traditional British men',
    'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',
    [
      new Ingredient('celery', 8),
      new Ingredient('brocolli', 9)
    ])
  ]

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

}
