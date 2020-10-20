import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingDataService {
  public data: any[] = [];
  countbadge=0;
  constructor() { }


  getData() {
    return this.data
  }
  // badgeData(){
  //   debugger;
  //   return this.countbadge;
  // }
}
