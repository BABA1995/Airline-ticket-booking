import { Component, OnInit } from '@angular/core';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { BookingDataService } from '../booking-data.service';




@Component({
  selector: 'app-ticket-history',
  templateUrl: './ticket-history.component.html',
  styleUrls: ['./ticket-history.component.css']
})
export class TicketHistoryComponent implements OnInit {
  public bookdata: any =[]
  columnsToDisplay = ['index', 'name', 'selectvalue','selectvalue1','selectvalue2', 'datepick', 'delete'];
  dataSource = this.bookdata;
  constructor(public bookingdata: BookingDataService) {


  }

  ngOnInit(): void {
    this.bookdata= this.bookingdata.getData();
    console.log(this.bookdata);
  }

  onDelete(g:number){
console.log(g);
const islessthan0 = (o,i) => i!==g;
console.log(this.bookdata.filter(islessthan0));
this.bookdata= this.bookdata.filter(islessthan0);

}
}
