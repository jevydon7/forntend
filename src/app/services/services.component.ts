import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../booking.service';
import { ActivatedRoute,Router } from '@angular/router';
import { events } from '../models/events';
import { eventsService } from '../events.service';
import { booking } from '../models/booking';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  event!:events[];

  constructor(private bookingservice:BookingService, private router:Router,private eventservice:eventsService) { }  

  bookingForm = new FormGroup({
     firstname:new FormControl('',Validators.required),
     lastname:new FormControl('',Validators.required),
     phonenumber:new FormControl('',Validators.required),
     email:new FormControl('',Validators.required),
     eventselected:new FormControl('',Validators.required),
  })

  firstname(){
    return this.bookingForm.get('firstName')
  }

  lastname(){
    return this.bookingForm.get('lastname')
  }
  
  email(){
    return this.bookingForm.get('email')
  }

  phonenumber(){
    return this.bookingForm.get('phonenumber')
  }

  eventselected(){
    return this.bookingForm.get('eventselected')
  }

  getallevents(){
     this.eventservice.getEvents().subscribe(getall => this.event = getall)
  }

  submit(body:object){
    this.bookingservice.createNewBooking(body).subscribe({
      next:()=> {
        alert('booking compeleted')
      }, 
      error:() => (
        alert('error')
      )
    })
  }

  ngOnInit(): void {
    this.getallevents();
  }

}
