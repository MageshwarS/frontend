import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/domain/employees';
import { TravelRequests } from 'src/app/domain/travel-requests';
import { EmployeesService } from 'src/app/services/employees.service';
import { TravelRequestService } from 'src/app/services/travel-request.service';

@Component({
  selector: 'app-view-travel-request-by-id',
  templateUrl: './view-travel-request-by-id.component.html',
  styleUrls: ['./view-travel-request-by-id.component.css']
})
export class ViewTravelRequestByIdComponent {
  employee : Employees=new Employees();
  travelrequests : TravelRequests[]=[];
  employeeId :number=0;

  constructor(private employeeService: EmployeesService,private router : Router,private travelService : TravelRequestService ){}
ngOnInit(): void {
  this.employee = JSON.parse(sessionStorage.getItem('employee') +'')
  if(this.employee==null){this.router.navigate(['loginPage']);}

    this.employee = JSON.parse(sessionStorage.getItem('employee')+'');
    this.employeeId = this.employee.employeeId;
    this.travelService.getTravelRequestByEmployeeId(this.employeeId).subscribe(
      data=>{
          this.travelrequests=data;
          console.log(data);
      }
      
      
  );
}
}
