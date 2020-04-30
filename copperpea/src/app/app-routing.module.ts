import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { AuthGuardService } from "./auth/auth-guard.service";
import { HomeComponent } from "./core/home/home.component";
import { ContactComponent } from "./core/contact/contact.component";
import { CompetitionComponent } from "./courses/competition/competition.component";
import { JuniorComponent } from "./courses/junior/junior.component";
import { BlogComponent } from "./blogs/blog/blog.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren:
      () => import('./recipes/recipes.module').then(m => m.RecipesModule)},
  {path: 'ccc', component: CompetitionComponent},
  {path: 'junior', component: JuniorComponent},
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
