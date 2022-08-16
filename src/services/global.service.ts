import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserType } from 'src/models/global.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private userTypeBehaviorSubject = new BehaviorSubject<UserType|undefined>(undefined)
  constructor(private router: Router) { }

  userEnterEvent(userType: UserType){
    this.userTypeBehaviorSubject.next(userType);
    this.router.navigate(['/orders']);
  }
}
