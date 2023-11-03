import { trainerRoleGuard } from './trainer-role.guard';
import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class TraineeRoleGuardService{
  constructor(private router:Router){}

  getRouter():Router {
    return this.router;
  }
}

export const traineeRoleGuard: CanActivateFn = (route, state) => {
  const traineeRoleGuardService = inject(TraineeRoleGuardService);
  const router: Router = traineeRoleGuardService.getRouter();
  if(localStorage.getItem("role") === 'trainee'){
    return true;
  }
  else if(localStorage.getItem("role") === ''){
    router.navigate(['/login']);
    return false;
  }
 
  alert("You don't have an access");
  router.navigate(['trainer/trainer-profile']);  
  return false;
};
