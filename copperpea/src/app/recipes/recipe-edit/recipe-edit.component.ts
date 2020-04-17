import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";

import { RecipeService } from "../recipe.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private rcService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  initForm() {
    let rcName = '';
    let rcDesc = '';
    let rcImagePath = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const rc = this.rcService.getRecipe(this.id);
      rcName = rc.name;
      rcDesc = rc.description;
      rcImagePath = rc.imagePath;

      if (rc['ingredients']) {
        for (let ingredient of rc.ingredients) {
          // populate FormArray with FormGroups
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(rcName, Validators.required),
      description: new FormControl(rcDesc, Validators.required),
      imagePath: new FormControl(rcImagePath, Validators.required),
      ingredients: recipeIngredients
    });
  }

  onSubmit() {
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(),
        amount: new FormControl()
      })
    );
  }

}
