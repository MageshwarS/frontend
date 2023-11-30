import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/domain/employees';
import { TravelRequests } from 'src/app/domain/travel-requests';
import { TravelRequestService } from 'src/app/services/travel-request.service';

@Component({
  selector: 'app-travel-request-details-for-director',
  templateUrl: './travel-request-details-for-director.component.html',
  styleUrls: ['./travel-request-details-for-director.component.css']
})
export class TravelRequestDetailsForDirectorComponent implements OnInit{
  travelRequests:TravelRequests=new TravelRequests();
  travelRequestId:number=0;
  employeeId :number = 0;
  employee : Employees  = new Employees();
  message : string = '';
  flag : boolean = false;

  constructor(private activatedRouter:ActivatedRoute ,private travelrequestService:TravelRequestService, private router : Router){}

  ngOnInit(): void {
    this.employee = JSON.parse(sessionStorage.getItem('employee') +'')
    if(this.employee==null){this.router.navigate(['loginPage']);}

    this.employee = JSON.parse(sessionStorage.getItem('employee')+'');
    this.employeeId = this.employee.employeeId;
    this.travelRequestId=this.activatedRouter.snapshot.params['travelRequestId'];
    this.travelrequestService.getRequestDetailsById(this.travelRequestId).subscribe(
      data=>{
        this.travelRequests=data;
        console.log(data);
      }
    )
  }

  updateapprovalbyDirector( directorApproval :string){
    this.travelRequests.directorApproval = directorApproval;
    if(directorApproval=='approved'){this.travelRequests.documentStatus='requested'; this.travelRequests.comments='yet to book';}
    this.travelrequestService.updateApproval(this.travelRequests).subscribe(
      data =>{this.travelRequests =data;
        console.log(data);
        this.flag = true;
        directorApproval=='approved' ? this.message = 'Request Approved Successfully' : this.message = 'Request Rejected';
      }
    );
  }

}
