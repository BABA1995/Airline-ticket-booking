import { Component, OnInit } from '@angular/core';
import { BookingDataService } from '../booking-data.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

interface Travel {
  viewValue: string;
  number: string;
  scheduledTime: string;
}

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  viewValue: String;
  scheduledTime: String;
  
  traveltype: Travel[] = [
    { viewValue: 'Arrival', number: '302', scheduledTime: '2017-12-11T01:06:00.000' },
    { viewValue: 'Departure', number: '303', scheduledTime: '2017-12-11T01:10:00.000' },
    { viewValue: 'standby', number: '303', scheduledTime: '2017-12-11T01:15:00.000' }
  ];
  name = new FormControl('');
  selectvalue = new FormControl('');
  selectvalue1 = new FormControl('');
  selectvalue2 = new FormControl('');
  datepick = new FormControl('');



  constructor(public bookingDataService: BookingDataService, private rout: Router) {

  }

  ngOnInit(): void {
    //     this.name.valueChanges.subscribe(res=>{
    //       console.log(res)
    //     });
    // this.selectvalue.valueChanges.subscribe(res=>{
    //   console.log(res)
    // })
    // this.selectvalue1.valueChanges.subscribe(res=>{
    //   console.log(res)
    // })
    // this.selectvalue2.valueChanges.subscribe(res=>{
    //   console.log(res)
    // })
    // this.datepick.valueChanges.subscribe(res=>{
    //   console.log(res)
    // })

  }

  onBook() {
    let book = {
      name: this.name.value,
      selectvalue: this.selectvalue.value,
      selectvalue1: this.selectvalue1.value,
      selectvalue2: this.selectvalue2.value,
      datepick: this.datepick.value

      
    }
    this.bookingDataService.data.push(book);
    this.rout.navigate(['tickethistory'])
  }

}
