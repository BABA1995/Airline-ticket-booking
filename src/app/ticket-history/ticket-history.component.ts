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
  columnsToDisplay = ['name', 'selectvalue','selectvalue1','selectvalue2', 'datepick'];
  dataSource = this.bookdata;
  constructor(public bookingdata: BookingDataService) {


  }
 
  ngOnInit(): void {
    this.bookdata = this.bookingdata.getData();
    console.log(this.bookdata);
  }


}
