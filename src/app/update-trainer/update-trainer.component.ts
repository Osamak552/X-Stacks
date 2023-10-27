import { Component, OnInit } from '@angular/core';
import { Specialization } from '../models/specialization.model';
import { TrainerService } from '../services/trainer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Trainer } from '../models/trainer';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-update-trainer',
  templateUrl: './update-trainer.component.html',
  styleUrls: ['./update-trainer.component.scss']
})
export class UpdateTrainerComponent implements OnInit {

  specializations: Specialization[] = [];
  trainer?: Trainer;

  trainerForm = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    specialization: new FormControl(null, Validators.required),
    active: new FormControl(null, Validators.required)
  });

  constructor(private trainerService: TrainerService
    ,private navbarSerivice:NavbarService) {
  }

  ngOnInit(): void {
    this.navbarSerivice.updateData("trainer");
    this.trainerService.getTrainerSpecialization().subscribe({
      next: (data: Specialization[]) => {
        this.specializations = data;
        console.log(this.specializations);
      }
    });
    this.trainerService.getTrainerProfile(localStorage.getItem('username')).subscribe({
      next: (data: Trainer) => {
        console.log("TrainerDetails", data);
        this.trainer = data;
      }
    });
  }


  updateTrainer() {
    if (this.trainerForm.valid) {
      this.trainerService.updateTrainer(this.trainerForm.getRawValue());
      console.log(this.trainerForm.getRawValue());
    }
    else{
      alert("Please fill all the fields");
    }
  }



}
