import { authGuard } from './shared/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TrainerRegistrationComponent } from './trainer-registration/trainer-registration.component';
import { TraineeRegistrationComponent } from './trainee-registration/trainee-registration.component';
import { TraineeProfileComponent } from './trainee-profile/trainee-profile.component';
import { TrainingComponent } from './training/training.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import { TraineeRoleGuardService, traineeRoleGuard } from './shared/trainee-role.guard';
import { trainerRoleGuard } from './shared/trainer-role.guard';
import { UpdateTraineeComponent } from './update-trainee/update-trainee.component';
import { UpdateTrainerComponent } from './update-trainer/update-trainer.component';
import { AddTrainingComponent } from './add-training/add-training.component';
import { LogoutComponent } from './logout/logout.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


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
    path: "trainer-register",
    component: TrainerRegistrationComponent
  },
  {
    path:"trainee-register",
    component: TraineeRegistrationComponent
  },
  {
    path:'trainee-profile',
    component: TraineeProfileComponent,
    canActivate: [authGuard,traineeRoleGuard]
  },
  {
    path:'trainer-profile',
    component: TrainerProfileComponent,
    canActivate: [authGuard,trainerRoleGuard]
  },
  {
    path: "training",
    component: TrainingComponent,
    canActivate: [authGuard]
  },
  {
    path:"trainee-update",
    component: UpdateTraineeComponent,
    canActivate: [authGuard,traineeRoleGuard]
  },
  {
    path:"trainer-update",
    component: UpdateTrainerComponent,
    canActivate: [authGuard,trainerRoleGuard]
  },
  {
    path: "add-training",
    component: AddTrainingComponent,
    canActivate: [authGuard,traineeRoleGuard]
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
