import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignInGuard {
  constructor(public router: Router) {}

  canActivate(): Observable<boolean> {
    return of(true);
  }
}
