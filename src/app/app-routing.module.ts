import { authGuard } from './shared/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path:"trainee",
    loadChildren : () => import('./trainee-module/trainee.module').then(m => m.TraineeModule)
  },
  {
    path:"trainer",
    loadChildren : () => import('./trainer-module/trainer.module').then(m => m.TrainerModule)
  },
  {
    path:"training",
    loadChildren : () => import('./training-module/training.module').then(m => m.TrainingModule)
  },
  {
    path: "change-password",
    component: ChangePasswordComponent,
    canActivate: [authGuard]
  },
  {
    path: "logout",
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
