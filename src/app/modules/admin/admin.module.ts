import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTable, MatTableModule } from '@angular/material/table';
import { BookingUpdateComponent } from '../booking-update/booking-update.component';
import { EventsUpdateComponent } from '../events-update/events-update.component';
import { EventListComponent } from '../event-list/event-list.component';



@NgModule({
  declarations: [
    AdminHomeComponent,
    BookingUpdateComponent,
    EventsUpdateComponent,
    EventListComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule
  ]
})
export class AdminModule { }
