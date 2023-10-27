import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { TraineeService } from '../services/trainee.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangePassword } from '../models/change-password';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent  implements OnInit{
  

  constructor(private nvabarService:NavbarService
    ,private traineeService:TraineeService
    ,private navbarService:NavbarService
    ,private authService:AuthService){

  }
  ngOnInit(): void {
    const role = localStorage.getItem('role') || "home";
    this.navbarService.updateData(role);
  }

  formGroup = new FormGroup({
    password: new FormControl('', Validators.required),
    npassword: new FormControl('',Validators.required)
  });

  changePassword(){
    if(this.formGroup.valid){
      const changePassword:ChangePassword = {
        username : localStorage.getItem('username') || '',
        password : this.formGroup.value.password || '',
        newPassword: this.formGroup.value.npassword || ''
      }
      this.authService.changePassword(changePassword);
    }
    else{
      alert('Please enter details properly');
    }

  }

}
