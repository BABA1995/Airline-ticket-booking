import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { TicketHistoryComponent } from './ticket-history/ticket-history.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: "", redirectTo: 'ticketbooking', pathMatch: "full"
  },
  {
    path: "ticketbooking", component: BookingFormComponent
  },
  {
    path: "tickethistory", component: TicketHistoryComponent
  },
  {
    path: "cart", component: CartComponent
  }

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
