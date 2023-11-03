import { LoginComponent } from '../../auth/login/login.component';
import { Component, OnInit } from '@angular/core';
import { TraineeService } from '../../services/trainee.service';
import { Trainee } from '../../models/trainee';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-trainee-profile',
  templateUrl: './trainee-profile.component.html',
  styleUrls: ['./trainee-profile.component.scss']
})
export class TraineeProfileComponent implements OnInit {

  trainee?: Trainee;

  constructor(private traineeService: TraineeService,
    private navbarService:NavbarService) { }
  ngOnInit(): void {
    console.log("Inside trainer prof: " ,localStorage.getItem('username'));
    this.getTraineeDetails();
    this.navbarService.updateData('trainee');
  }


  getTraineeDetails(){

    this.traineeService.getTraineeProfile().subscribe({
      next: (data: Trainee) => {
        console.log("TraineeDetails ->", data);
        this.trainee = data;
      },
      error: (error: any) => {}

    })
  }



}
