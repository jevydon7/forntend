import { Component, OnInit } from '@angular/core';
import { events } from 'src/app/models/events';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router'
import { eventsService } from 'src/app/events.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

displayedColumns: string[] = ['eventsName','action'];
    events:events[]=[]
    adminDataSource!: MatTableDataSource<any>;
    

  constructor(private eventservice:eventsService, private route:Router) { }

  getallEvent(){
    this.eventservice.getEvents().subscribe((res) => {
      this.adminDataSource = new MatTableDataSource(res)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.adminDataSource.filter = filterValue.trim().toLowerCase();
  }

  updateevent(id:any){
    this.route.navigate(['admin/event-update/'+id])
  }

  deletebutn(id:string){
    this.eventservice.deleteEvent(id).subscribe({
      next:()=>{
        alert('delete sucessfull')
        this.getallEvent()
      },
      error:()=>{
        alert('error ocured')
      }
    })
  }

  ngOnInit(): void {
    this.getallEvent()
  }
  

}