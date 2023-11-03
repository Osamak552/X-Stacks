import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trainee } from '../models/trainee';

import { baseUrl } from 'src/environment/variables';
import { Router } from '@angular/router';
import { ErrorResponse } from '../models/error.response.model';
import { AssignTrainersRequestDto } from '../models/assign-trainers.model';
import { ChangePassword } from '../models/change-password';


@Injectable({
  providedIn: 'root'
})
export class TraineeService {

  constructor(private http:HttpClient
    ,private router:Router) { }

  public getTraineeProfile():Observable<Trainee> {
    const username = localStorage.getItem('username');
        return this.http.get<Trainee>( '/api/home/trainee/'+ username);
  }

  public createTrainee(trainee:any):void{
    const url = "/api/home/trainee/register";

    this.http.post(url, trainee).subscribe({
      next: (reponse:any) => {
        console.log("RESPONSE:  " + reponse)
        alert("Registration is successful");
        this.router.navigate(['/login']);
      },
      error: (error:ErrorResponse) => {
        alert("Error occur while creating");
        console.log(error);
        console.log("ERROR: " + JSON.stringify(error));
        this.router.navigate(['trainee/trainee-register']);
      }, 
    });
  }

  public updateTrainee(trainee:any,assignTrainersRequestDto:AssignTrainersRequestDto):void{

    console.log(assignTrainersRequestDto);
    const username = localStorage.getItem('username');
    const url = "/api/home/trainee/"+username;
    this.http.put(url,trainee).subscribe({
      next: (response:any) => {
        console.log(JSON.stringify(response));
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
        this.http.put('/api/home/trainee/assign-trainers',assignTrainersRequestDto,httpOptions).subscribe({
          next:(data:any) =>{
            alert("trainee updated successfully")
            this.router.navigate(['trainee/trainee-profile']);
          },
          error: (err:any) => {
            console.log(JSON.stringify(err));
            alert("Error occurred");
          }
        })
       
      },
      error: (err:any) => {
        console.log(JSON.stringify(err));
        alert("Error occurred");
      }
    })
  }


 
}
