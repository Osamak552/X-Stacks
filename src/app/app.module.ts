import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TrainerRegistrationComponent } from './trainer-registration/trainer-registration.component';
import { TraineeRegistrationComponent } from './trainee-registration/trainee-registration.component';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { TraineeProfileComponent } from './trainee-profile/trainee-profile.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import { TrainingComponent } from './training/training.component';
import {MatTableModule} from '@angular/material/table';
import {NgFor} from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './training/trainer-filter.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UpdateTraineeComponent } from './update-trainee/update-trainee.component';
import { UpdateTrainerComponent } from './update-trainer/update-trainer.component';
import { AddTrainingComponent } from './add-training/add-training.component';
import {MatSliderModule} from '@angular/material/slider';
import { LogoutComponent } from './logout/logout.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { ChangePasswordComponent } from './change-password/change-password.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    TrainerRegistrationComponent,
    TraineeRegistrationComponent,
    FooterComponent,
    TraineeProfileComponent,
    TrainerProfileComponent,
    TrainingComponent,
    DialogOverviewExampleDialog,
    UpdateTraineeComponent,
    UpdateTrainerComponent,
    AddTrainingComponent,
    LogoutComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule,
    MatTableModule,
    NgFor,
    MatPaginatorModule,
    MatDialogModule,
    HttpClientModule,
    MatSliderModule,
    MatSlideToggleModule
  
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}


