import { Component, OnInit } from '@angular/core';

import { NavbarService } from '../../services/navbar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TrainingService } from '../../services/training.service';
import { TraineeService } from '../../services/trainee.service';
import { Trainee } from '../../models/trainee';
import { TrainerResponseDto } from '../../models/trainer-response-dto';
import { TrainingRequest } from '../../models/training.request.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.scss']
})

export class AddTrainingComponent implements OnInit {

  duration:number = 15;
  trainersList?:TrainerResponseDto[];

  constructor(private navbarService:NavbarService
    ,private trainingService:TrainingService
    ,private traineeService:TraineeService
    ) { }

  trainingForm = new FormGroup({
    trainerUsername: new FormControl('',Validators.required),
    trainingName: new FormControl('',Validators.required),
    trainingDate: new FormControl(null,Validators.required),
    trainingDuration: new FormControl(15,Validators.required)
  });


  ngOnInit(): void {
    this.navbarService.updateData('trainee');
    this.traineeService.getTraineeProfile().subscribe({
      next: (data: Trainee) => {
        console.log("TraineeDetails ->", data);
        this.trainersList = data.trainerResponseDtoList;
      },
      error: (error: any) => {}
    });
  }

  addTrainig():void{

    const unfromatedTrainingDate = this.trainingForm.value.trainingDate
    ? new Date(this.trainingForm.value.trainingDate)
    : new Date();
    const trainingDetail:TrainingRequest = {
      traineeUsername: localStorage.getItem('username') || '',
      trainerUsername: this.trainingForm.value.trainerUsername || '',
      trainingName: this.trainingForm.value.trainingName || '',
      trainingDate: unfromatedTrainingDate.toISOString().split('T')[0] || '',
      trainingDuration: this.trainingForm.value.trainingDuration || 15
    } 

    console.log("Training Details: ====>  " , trainingDetail);
    if(this.trainingForm.valid){
      this.trainingService.addTraining(trainingDetail);
    }
    else{
      alert("Please enter the valid details");
    }

  }

  formatLabel(value: number): string {
      return `${value}` + 'min';
  }

}
