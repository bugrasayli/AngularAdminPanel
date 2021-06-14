import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterUrlService {

  private messageSource =  new BehaviorSubject<string>('');
  currentMessage=  this.messageSource.asObservable();
  constructor() { }
  ChangeMessage(message :string)
  {
    this.messageSource.next(message);
  }
}
