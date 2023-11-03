import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavbarService } from '../../services/navbar.service';
import { TraineeService } from '../../services/trainee.service';
import { Trainee } from '../../models/trainee';
import { TrainerService } from '../../services/trainer.service';
import { TrainerResponseDto } from '../../models/trainer-response-dto';
import { AssignTrainersRequestDto } from '../../models/assign-trainers.model';

@Component({
  selector: 'app-update-trainee',
  templateUrl: './update-trainee.component.html',
  styleUrls: ['./update-trainee.component.scss']
})
export class UpdateTraineeComponent implements OnInit {
  trainee?:Trainee;
  trainers?:TrainerResponseDto[] = []

  constructor(private navbarService:NavbarService
    ,private traineeService:TraineeService
    ,private trainerService:TrainerService,private fb: FormBuilder) { }
    
    traineeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required],
      active: [true], 
      selectedTrainers: [] 
    });
    
  ngOnInit(): void {
    this.navbarService.updateData("trainee");
    this.traineeService.getTraineeProfile().subscribe({
      next: (data: Trainee) => {
        this.trainee = data;
        
      }
    });
    this.trainerService.getUnassignedTrainers().subscribe({
      next: (data:TrainerResponseDto[]) => {
        this.trainers = data;
      }
    });

    

}
updateTrainee():void{

  console.log(this.traineeForm.value)
  if(this.traineeForm.valid){
    const assignTrainersRequestDto:AssignTrainersRequestDto = {
      traineeUsername:localStorage.getItem('username') || '',
      trainerUsernameList : this.traineeForm.value.selectedTrainers || []
    }
    
     this.traineeService.updateTrainee(this.traineeForm.value,assignTrainersRequestDto);
    
    
  }
  else{
    alert("Please provide the all trainee details");
  }
}

}