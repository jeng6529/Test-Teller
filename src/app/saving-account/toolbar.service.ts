import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  private _submit$ = new Subject<boolean>();
  private _validity$ = new BehaviorSubject<boolean>(false);

  get submit$(){
    return this._submit$;
  }

  get validity$(){
    return this._validity$
  }

  setValidity(validity:boolean){
    this.validity$.next(validity);
  }

  constructor() { }

  submit(){
    this.submit$.next(true);
  }

  refresh(){
    
  }
}
