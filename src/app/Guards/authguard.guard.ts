import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {
 let router= inject(Router)
 if(localStorage.getItem('token')){
  return true
 }
 else{
  router.navigate(['/login'])
  return false 
 }
};
