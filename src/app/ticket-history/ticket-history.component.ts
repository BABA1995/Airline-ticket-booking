import { Component, OnInit } from '@angular/core';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { BookingDataService } from '../booking-data.service';

@Component({
  selector: 'app-ticket-history',
  templateUrl: './ticket-history.component.html',
  styleUrls: ['./ticket-history.component.css']
})
export class TicketHistoryComponent implements OnInit {

  constructor(public bookingdata: BookingDataService) {


  }
  public bookdata: any =[]
  ngOnInit(): void {
    this.bookdata = this.bookingdata.getData();
    console.log(this.bookdata);
  }


}
