import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Specialization } from '../models/specialization.model';
import { baseUrl } from 'src/environment/variables';
import { Router } from '@angular/router';
import { ErrorResponse } from '../models/error.response.model';
import { TrainerResponseDto } from '../models/trainer-response-dto';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  constructor(private http:HttpClient
    ,private router:Router) { }


  public getTrainerProfile(username:any):Observable<Trainer> {
        return this.http.get<Trainer>("/api/home/trainer/"+username);
  }

  public getTrainerSpecialization():Observable<Specialization[]> {
    return this.http.get<Specialization[]>("/api/home/training-type");
  }


  public createTrainer(trainee:any):void{
    const url = "/api/home/trainer/register";

    this.http.post(url, trainee).subscribe({
      next: (reponse:any) => {
        alert("Registration is successful");
        this.router.navigate(['/login']);
        
      },
      error: (error:ErrorResponse) => {
        alert("Error occur while creating");
        this.router.navigate(['trainer/trainer-register']);
      },  
    });
  }

  public updateTrainer(trainee:any):void{
    const username = localStorage.getItem('username');
    const url ="/api/home/trainer/"+ username;

    this.http.put(url, trainee).subscribe({
      next: (reponse:any) => {
        alert("Updated successfully!");
        this.router.navigate(['trainer/trainer-profile']);
      },
      error: (error:ErrorResponse) => {
        alert("Error occur while updating");
        this.router.navigate(['trainer/trainer-update']);
      },  
    });
  }

  public getUnassignedTrainers():Observable<TrainerResponseDto[]> {
    const username = localStorage.getItem('username');
    const url = "/api/home/trainer/unassigned-trainer/"+username;
    return this.http.get<TrainerResponseDto[]>(url);
  }


}
