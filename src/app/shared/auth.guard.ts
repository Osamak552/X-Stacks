import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthGuardService{
  constructor(private router:Router){}

  getRouter():Router {
    return this.router;
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  const authGuardService = inject(AuthGuardService);
  if(localStorage.getItem("token") != null)
  {
    return true;
  }
  authGuardService.getRouter().navigate(['/login']);
  return false;
};
