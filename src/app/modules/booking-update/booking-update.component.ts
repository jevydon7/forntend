import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { BookingService } from 'src/app/booking.service';
import { booking } from 'src/app/models/booking';

@Component({
  selector: 'app-booking-update',
  templateUrl: './booking-update.component.html',
  styleUrls: ['./booking-update.component.css']
})
export class BookingUpdateComponent implements OnInit {
  bookinginfo!:booking
  selectinfo:string=this.activeroute.snapshot.params['id']
  updateform!:FormGroup

  constructor(private activeroute:ActivatedRoute,private route:Router,private service:BookingService) { }

  getid(){
    this.service.getbookingbyId(this.selectinfo).subscribe((update) =>{
      this.bookinginfo = update
      this.updateform = new FormGroup({
        firstname:new FormControl(update.firstName,Validators.required),
        lastname:new FormControl(update.lastName,Validators.required),
        telephonenumb:new FormControl(update.phoneNumber,Validators.required),
        email:new FormControl(update.email,Validators.required),
        eventselected:new FormControl(update.eventSelected,Validators.required)
      })
    })
  }

  confirmbutton(body:object){
     this.service.updateBooking(this.selectinfo, body).subscribe({
      next:()=>{
        alert('record updated')
        this.route.navigate(['/admin/home'])
      },
      error:(error) =>{
        console.log(error);
        
      }
     })
  }

  ngOnInit(): void {
    this.getid()
  }

}
