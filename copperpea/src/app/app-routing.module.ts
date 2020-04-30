import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { AuthGuardService } from "./auth/auth-guard.service";
import { HomeComponent } from "./core/home/home.component";
import { ContactComponent } from "./core/contact/contact.component";
import { BlogComponent } from "./blogs/blog/blog.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren:
      () => import('./recipes/recipes.module').then(m => m.RecipesModule)},
  {path: 'courses', loadChildren:
      () => import('./courses/courses.module').then(m => m.CoursesModule)},
  {path: 'blogs', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
