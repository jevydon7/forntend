import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { eventsService } from 'src/app/events.service';
import { events } from 'src/app/models/events';

@Component({
  selector: 'app-events-update',
  templateUrl: './events-update.component.html',
  styleUrls: ['./events-update.component.css']
})
export class EventsUpdateComponent implements OnInit {
  events!:events
  selectinfo:string=this.activeroute.snapshot.params['id']
  updateform!:FormGroup

  constructor(private activeroute:ActivatedRoute,private route:Router,private event:eventsService) { }

  getid(){
    this.event.geteventbyId(this.selectinfo).subscribe((update) =>{
      this.events = update[0]
      this.updateform = new FormGroup({
        eventselected:new FormControl(update.eventsName,Validators.required)
      })
    })
  }

  confirmbutton(body:object){
     this.event.updateEvent(this.selectinfo, body).subscribe({
      next:()=>{
        alert('record updated')
        this.route.navigate(['/admin/events'])
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
