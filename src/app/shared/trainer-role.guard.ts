import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class TrainerRoleGuardService{
  constructor(private router:Router){}

  getRouter():Router {
    return this.router;
  }
}
export const trainerRoleGuard: CanActivateFn = (route, state) => {
  const trainerRoleGuardService = inject(TrainerRoleGuardService);
  const router: Router = trainerRoleGuardService.getRouter();
  if(localStorage.getItem("role") === 'trainer'){
    return true;
  }
  
  else if(localStorage.getItem("role") === ''){
    router.navigate(['/login']);
    return false;
  }
 
  alert("You don't have an access");
  router.navigate(['trainee/trainee-profile']);  
  return false;
};
