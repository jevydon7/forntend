import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/booking.service';
import { booking } from 'src/app/models/booking';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router'


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
  
})

export class AdminHomeComponent implements OnInit {
  
    displayedColumns: string[] = ['firstName', 'lastName', 'telephone', 'email', 'eventSelected','action'];
    bookings:booking[]=[]
    adminDataSource!: MatTableDataSource<any>;
    

  constructor(private bookingService:BookingService, private route:Router) { }

  getallBooking(){
    this.bookingService.getBooking().subscribe((res) => {
      this.adminDataSource = new MatTableDataSource(res)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.adminDataSource.filter = filterValue.trim().toLowerCase();
  }

  updatebooking(id:any){
    this.route.navigate(['/admin/booking-update/'+id])
  }

  deletebutn(id:string){
    this.bookingService.deleteBooking(id).subscribe({
      next:()=>{
        alert('delete sucessfull')
        this.getallBooking()
      },
      error:()=>{
        alert('error ocured')
      }
    })
  }

  ngOnInit(): void {
    this.getallBooking()
  }
  

}
