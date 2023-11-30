import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/domain/employees';
import { TravelRequests } from 'src/app/domain/travel-requests';
import { EmployeesService } from 'src/app/services/employees.service';
import { TravelRequestService } from 'src/app/services/travel-request.service';


@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit{
  employee : Employees=new Employees();
  travelrequests : TravelRequests[]=[];
  employeeId :number=0;

   constructor(private employeeService: EmployeesService,private router:Router,private activateRouter:ActivatedRoute,private travelService : TravelRequestService ){
   }
ngOnInit(): void {
  this.employee = JSON.parse(sessionStorage.getItem('employee') +'')
  if(this.employee==null){this.router.navigate(['loginPage']);}

  this.employeeId = this.employee.employeeId;
  this.router.navigate(['profile/'+this.employeeId]);
  this.employeeId=this.activateRouter.snapshot.params['employeeId'];
  this.employeeService.getEmployeeById(this.employeeId).subscribe(
    data=>{
      this.employee=data;
      console.log(data);
    }
  );
    this.employeeId=this.activateRouter.snapshot.params['employeeId'];
    this.travelService.getTravelRequestByEmployeeId(this.employeeId).subscribe(
      data=>{
          this.travelrequests=data;
          console.log(data);
      }
      
      
  );
}
}