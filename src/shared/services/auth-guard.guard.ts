import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const localData = localStorage.getItem('angular17token');
  // debugger;
  if (localData !== null) {
    return true;
  } else {
    router.navigateByUrl('/login')
    return false;
  }


};
