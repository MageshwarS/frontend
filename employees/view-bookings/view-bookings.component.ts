import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookings } from 'src/app/domain/bookings';
import { Employees } from 'src/app/domain/employees';
import { BookingsService } from 'src/app/services/bookings.service';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit{

  employee: Employees = new Employees();
  employeeId : number = 0;
  bookings : Bookings[] =[];
  constructor(private router : Router, private bookingService : BookingsService){}
  ngOnInit(): void {
    this.employee = JSON.parse(sessionStorage.getItem('employee')+'');
    if(this.employee==null){this.router.navigate(['loginPage']);}
    this.employeeId = this.employee.employeeId;


    this.bookingService.getBookingsByEmployeeId(this.employeeId).subscribe(
      data=>{
        this.bookings = data;
        console.log(this.bookings);
      }
    );
  }

}
