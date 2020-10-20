import { Component, OnInit } from '@angular/core';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { BookingDataService } from '../booking-data.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


interface Ticket{
  meetUp: string;
  totalPerson: number;
}

@Component({
  selector: 'app-ticket-history',
  templateUrl: './ticket-history.component.html',
  styleUrls: ['./ticket-history.component.css']
})
export class TicketHistoryComponent implements OnInit {
  public bookdata: any =[]
  columnsToDisplay = ['index', 'name', 'selectvalue','selectvalue1','selectvalue2', 'datepick', 'delete'];
  dataSource = this.bookdata;
  badgeNumber= 0;
  firstName = new FormControl('');
  lastName = new FormControl('');
  email = new FormControl('');
  contact = new FormControl('');
  selectvalue = new FormControl('');
  totalmenber = new FormControl('')
  info: Ticket[] = [
    {
      meetUp: "-90 mintues",
      totalPerson: 1
    },
    {
      meetUp:"-50 minutes",
      totalPerson: 2
    },
    {
      meetUp:"25mins",
      totalPerson: 3
    }
  ]

  
  constructor(public bookingdata: BookingDataService, public rout: Router) {

  }

  ngOnInit(): void {
    this.bookdata= this.bookingdata.getData();
    console.log(this.bookdata);
    this.badgeNumber= this.bookingdata.countbadge;
   
  }

  onDelete(g:number){
console.log(g);
const islessthan0 = (o,i) => i!==g;
console.log(this.bookdata.filter(islessthan0));
this.bookdata= this.bookdata.filter(islessthan0);

}

onSubmit(){
 debugger;
this.badgeNumber= this.badgeNumber+1;
   this.bookingdata.countbadge=this.badgeNumber;
  console.log(this.badgeNumber++)
this.rout.navigate(['ticketbooking']);

}

}
