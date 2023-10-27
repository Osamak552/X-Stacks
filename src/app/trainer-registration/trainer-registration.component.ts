import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Specialization } from '../models/specialization.model';
import { TrainerService } from '../services/trainer.service';

@Component({
  selector: 'app-trainer-registration',
  templateUrl: './trainer-registration.component.html',
  styleUrls: ['./trainer-registration.component.scss']
})
export class TrainerRegistrationComponent implements OnInit{
  specializations:Specialization[] = [];
  
   trainerForm = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    specialization: new FormControl(null, Validators.required),
  });

  constructor(private trainerService:TrainerService){}
  ngOnInit(): void {
    this.trainerService.getTrainerSpecialization().subscribe({
      next: (data: Specialization[])=>{
        this.specializations = data;
        console.log(this.specializations);
    }});
    
  }

  createTrainer(){
    console.log(this.trainerForm.getRawValue());
    if(this.trainerForm.valid){
      this.trainerService.createTrainer(this.trainerForm.getRawValue());
    }
    else{
      alert("Please provide proper trainer details");

    }

  }

}
