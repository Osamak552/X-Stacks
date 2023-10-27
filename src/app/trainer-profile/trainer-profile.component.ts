import { NavbarService } from 'src/app/services/navbar.service';
import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../services/trainer.service';
import { Trainer } from '../models/trainer';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.scss']
})
export class TrainerProfileComponent implements OnInit {
  trainer?: Trainer;

  constructor(private trainerService: TrainerService,private navbarService:NavbarService) { }
  ngOnInit(): void {
    console.log("Inside trainer prof: " ,localStorage.getItem('username'));
    this.getTrainerDetails();
    this.navbarService.updateData('trainer');

  }


  getTrainerDetails(){
    this.trainerService.getTrainerProfile(localStorage.getItem('username')).subscribe({
      next: (data: Trainer) => {console.log("TrainerDetails", data);
      this.trainer = data;
    },
      error: (error: any) => {}

    })
  }

}
