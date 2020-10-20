import { Component, OnInit } from '@angular/core';
import { BookingDataService } from '../booking-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public badgeNumber:number;
  constructor(public badgeCount: BookingDataService) { }

  ngOnInit(): void {
   
  }
  
}
