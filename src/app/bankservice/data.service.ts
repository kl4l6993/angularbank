import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  datas="Data Inside Service file";
  serviceMethod()
  {
    alert("Service Method");
  }
}
