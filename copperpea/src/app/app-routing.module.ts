import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuardService } from "./auth/auth-guard.service";
import { HomeComponent } from "./core/home/home.component";
import { ContactComponent } from "./core/contact/contact.component";
import { CheckoutComponent } from "./core/checkout/checkout.component";
import { DownloadComponent } from "./download/download.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'courses', loadChildren:
      () => import('./courses/courses.module').then(m => m.CoursesModule)},
  {path: 'lessons', loadChildren:
      () => import('./lessons/lesson.module').then(m => m.LessonModule)},
  {path: 'teacher', loadChildren:
      () => import('./teacher/teacher.module').then(m => m.TeacherModule)},
  {path: 'me', loadChildren:
      () => import('./me/me.module').then(m => m.MeModule)},
  {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuardService]},
  {path: 'download', component: DownloadComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
