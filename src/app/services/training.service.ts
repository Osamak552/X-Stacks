import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environment/variables';
import { Training } from '../models/training.model';
import { TrainingRequest } from '../models/training.request.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {


  constructor(private http:HttpClient
    ,private router:Router) { }


  getAllTrainerTrainings(currentPage:number,pageSize:number):Observable<Training>{
    const url = "/api/home/training/Trainer-TrainingList";
    const params = new HttpParams()
    .set('trainerUsername',localStorage.getItem('username') || '')
    .set('page',currentPage)
    .set('size',pageSize);
    return this.http.get<Training>(url,{ params: params });
  }

  getAllTraineeTrainings(currentPage:number,pageSize:number):Observable<Training>{
    const url = "/api/home/training/Trainee-TrainingList";
    const params = new HttpParams()
    .set('traineeUsername',localStorage.getItem('username') || '')
    .set('page',currentPage)
    .set('size',pageSize);
    return this.http.get<Training>(url,{ params: params });
  }

  addTraining(trainingRequest:TrainingRequest):void{
    const url = "/api/home/training";
    this.http.post(url, trainingRequest).subscribe({
      next: (reponse: any) => {
        alert("Training successfully scheduled");
        this.router.navigate(['trainee/trainee-profile']);
          console.log(reponse);
      },
      error: (error: any) => {
        alert("Unable to schedule training");
        this.router.navigate(['/add-training']);
      }
    });

  }
}
