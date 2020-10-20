import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
// import { MatMomentDateModule } from '@angular/material-moment-adapter/core';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketHistoryComponent } from './ticket-history/ticket-history.component';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { CartComponent } from './cart/cart.component';
import {MatBadgeModule} from '@angular/material/badge';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookingFormComponent,
    TicketHistoryComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    MatDatepickerModule, MatNativeDateModule,
    // MatMomentDateModule
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatRadioModule,MatCardModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
