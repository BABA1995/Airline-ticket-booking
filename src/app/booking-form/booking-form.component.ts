import { Component, OnInit } from '@angular/core';

interface Travel{
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
traveltype: Travel[] =  [
  {viewValue:'Arrival'},
  {viewValue:'Departure'}
];
flightnumber: Travel[] = [

  {  number:'302'},
  {  number:'303'},
  {  number:'304'},

];
fighttimings: Travel[] =[
{  scheduledTime:'2017-12-11T01:06:00.000'},
{  scheduledTime:'2017-12-11T01:10:00.000'},
{  scheduledTime:'2017-12-11T01:15:00.000'},
]


  constructor() { }

  ngOnInit(): void {
  }

}
