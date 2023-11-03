import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { Token } from '../../models/token.model';
import { Router } from '@angular/router';
import { Role } from '../../models/role.model';
import { NavbarService } from '../../services/navbar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {

  selected = 'trainee';


  formGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required)
  });

  constructor(private auth:AuthService,private router:Router
    ,private navbarService:NavbarService) {
    
   }

  ngOnInit(): void {
    this.navbarService.updateData("home");

    if(localStorage.getItem('token') !== null){
      
      this.auth.getRole().subscribe({
        next: (response:Role) => {
          const role = response.role;
          if(role === 'trainee'){
            this.router.navigate(['trainee/trainee-profile']);
          }
          else if(role === 'trainer'){
            this.router.navigate(['trainer/trainer-profile']);
          }
        },
        error: (err:any) =>{
          localStorage.clear();
        }
      });
    }
    else{
      console.log("Logged OUT");
    }
  }

  login(): void {
    localStorage.setItem('username', this.formGroup.getRawValue().username?.toString() || '');
    
    
    this.auth.getToken(this.formGroup.getRawValue()).subscribe(
      {
        next: (token: Token) => 
        { 
        console.log('My Token:' + token.token);
        localStorage.setItem('token', token.token);
        this.assignScreen(this.selected);
        
      },
      error: (error: Token) => { 
        alert("User not exist");},
    }
    ); 
  }


  assignScreen(selectedRole:string):void{

    this.auth.getRole().subscribe(
      (response:Role) =>{
        const role = response.role;
        console.log("MY ROLE INSIDE ROLE REQ: " + role);
        localStorage.setItem('role', role);

        if(this.selected === 'trainee' && role === selectedRole){
          this.router.navigate(['trainee/trainee-profile']);
        }
        else if(this.selected === 'trainer' && role === selectedRole){
          this.router.navigate(['trainer/trainer-profile']);
        }
        else {
          alert('Please provide the correct credentials');
        }
      });
  }

}
