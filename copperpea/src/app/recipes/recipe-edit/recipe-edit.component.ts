import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";

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

    if (this.editMode) {
      const rc = this.rcService.getRecipe(this.id);
      rcName = rc.name;
      rcDesc = rc.description;
      rcImagePath = rc.imagePath;
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(rcName),
      description: new FormControl(rcDesc),
      imagePath: new FormControl(rcImagePath)
    });
  }

  onSubmit() {
    
  }

}
