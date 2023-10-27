import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { baseUrl } from '../../environment/variables'
import { Role } from '../models/role.model';
import { Trainer } from '../models/trainer';
import { ChangePassword } from '../models/change-password';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role:string = '';

  constructor(private http:HttpClient
    ,private router:Router) { }

  getToken(user:any):any{
    return this.http.post("/api/auth/login", user);
  }

  getRole():Observable<Role>{
    const username = localStorage.getItem('username');
    const url = "/api/home/login/role/"+username;
    return this.http.get<Role>(url);
  }

  changePassword(data:ChangePassword){

    this.http.post("/api/auth/login",{username:data.username,password:data.password}).subscribe({
      next: (res:any) =>{
        this.http.put("/api/home/login/change-password",data).subscribe({
          next: (data:any) =>{
            localStorage.clear();
            alert("Your password has been changed successfully");
            this.router.navigate(['/login']);
          }
        })
      },
      error: (err:any)=>{
        alert("Please provide correct old password");
      }
    })
    
  }
}
