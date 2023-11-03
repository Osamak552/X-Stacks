import { Specialization } from '../../models/specialization.model';
import { TraineeService } from '../../services/trainee.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavbarService } from '../../services/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainee-registration',
  templateUrl: './trainee-registration.component.html',
  styleUrls: ['./trainee-registration.component.scss']
})
export class TraineeRegistrationComponent implements OnInit{

  constructor(private navbarService:NavbarService
    ,private router:Router
    ,private traineeeService:TraineeService){}

  ngOnInit(): void {
    this.navbarService.updateData('home');
  }

   traineeForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dateOfBirth: new FormControl(null),
    address: new FormControl(null),
  });


  createTrainee():void{
    if(this.traineeForm.valid){
      console.log(this.traineeForm.getRawValue());
      this.traineeeService.createTrainee(this.traineeForm.getRawValue());

    }
    else{
      alert("Please provide proper trainee details");
      this.router.navigate(['trainee/trainee-register']);
    }
  }
}
