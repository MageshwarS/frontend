import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/domain/employees';
import { TravelRequests } from 'src/app/domain/travel-requests';
import { EmployeesService } from 'src/app/services/employees.service';
import { TravelRequestService } from 'src/app/services/travel-request.service';


@Component({
  selector: 'app-add-new-travel-request',
  templateUrl: './add-new-travel-request.component.html',
  styleUrls: ['./add-new-travel-request.component.css']
})
export class AddNewTravelRequestComponent implements OnInit {
  travelRequest : TravelRequests=new TravelRequests();
  employee:Employees=new Employees();
  flag:boolean=false;
  options : string[] = ['Mumbai', 'Chennai', 'Dubai', 'Delhi'];
  transports : string[] = ['Bus', 'Train', 'Flight'];
  employeeId:number=0;


  constructor(private travelService:TravelRequestService,private router:Router,private employeeService:EmployeesService,private activatedRouter:ActivatedRoute){
  }
  ngOnInit(): void {
    this.employee = JSON.parse(sessionStorage.getItem('employee') +'')
    if(this.employee==null){this.router.navigate(['loginPage']);}
  }



  submit(){
    this.travelRequest.employees.employeeId=this.activatedRouter.snapshot.params['employeeId'];
    this.travelService.addTravelRequest(this.travelRequest).subscribe(
      data=>{
          console.log(data);
          // this.router.navigate(["employee-home/"+this.travelRequest.employees.employeeId])
          this.flag=data;
      }
    );
}

goToHome(){
            this.router.navigate(["requests-sent/"+this.travelRequest.employees.employeeId]);

}
}