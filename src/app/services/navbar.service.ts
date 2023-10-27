import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private _someDataSubject: BehaviorSubject<string> = new BehaviorSubject<string>('home');
  public currentRole$: Observable<string> = this._someDataSubject.asObservable();

  updateData(newCurrentRole: string): void {
    this._someDataSubject.next(newCurrentRole);
  }
}
