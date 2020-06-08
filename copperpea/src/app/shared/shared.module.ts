import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTreeModule } from "@angular/material/tree";
import {CdkTreeModule} from '@angular/cdk/tree';
import { MatCheckboxModule } from "@angular/material/checkbox";

import { DropdownDirective } from "./dropdown.directive";

@NgModule({
  declarations: [ DropdownDirective ],
  imports:[
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatTreeModule,
    MatCheckboxModule,
    CdkTreeModule
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatTreeModule,
    MatCheckboxModule,
    CdkTreeModule
  ]
})
export class SharedModule {}
