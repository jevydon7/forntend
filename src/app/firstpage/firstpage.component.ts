import { Component, OnInit } from '@angular/core';
import { events } from '../models/events';
import { eventsService } from '../events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {

  eventsDetails: events[]=[]
  images = ['assets/paral.png','assets/hangglide.jpg','assets/parai.jpg']
  constructor(private eventsService:eventsService, private route:Router) { }

  ngOnInit(): void {
    this.getEventDetails()
    console.log(this.eventsDetails);
    
  } 

  getEventDetails(){
    this.eventsService.getEvents().subscribe(allEvents => {
      this.eventsDetails = allEvents})  
    console.log(this.eventsDetails)

  }

  moveTobooking(id:any){
    this.route.navigate(['/services/'])
  }

}
