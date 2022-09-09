import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { BookingUpdateComponent } from '../booking-update/booking-update.component';
import { EventListComponent } from '../event-list/event-list.component';
import { EventsUpdateComponent } from '../events-update/events-update.component';

const routes: Routes = [
  {path:'', redirectTo:'/admin/home', pathMatch:'full'},
  {path:'home', component:AdminHomeComponent},
  {path:'booking-update/:id', component:BookingUpdateComponent},
  {path:'event-update/:id', component:EventsUpdateComponent},
  {path: 'events',component:EventListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
