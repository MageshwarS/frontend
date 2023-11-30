import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/domain/employees';
import { TravelRequests } from 'src/app/domain/travel-requests';
import { TravelRequestService } from 'src/app/services/travel-request.service';


@Component({
  selector: 'app-travel-request-details',
  templateUrl: './travel-request-details.component.html',
  styleUrls: ['./travel-request-details.component.css']
})
export class TravelRequestDetailsComponent implements OnInit{
  travelRequests:TravelRequests=new TravelRequests();
  travelRequestId:number=0;
  employeeId :number = 0;
  employee : Employees  = new Employees();
  flag: boolean = false;
  message : string = '';

  file ?: File;

  constructor(private activatedRouter:ActivatedRoute ,private travelrequestService:TravelRequestService, private router:Router){}
  onChange(event : any){
    this.file = event.target.files[0];
  }

  ngOnInit(): void {

    this.employee = JSON.parse(sessionStorage.getItem('employee') +'')
    if(this.employee==null){this.router.navigate(['loginPage']);}
    this.employeeId = this.employee.employeeId;
    this.travelRequestId=this.activatedRouter.snapshot.params['travelRequestId'];
    this.travelrequestService.getRequestDetailsById(this.travelRequestId).subscribe(
      data=>{
        this.travelRequests=data;
        console.log(data);
      }
    )
  }

  updateapprovalbyManager( managerApproval :string){
    this.travelRequests.managerApproval = managerApproval;
    this.travelrequestService.updateApproval(this.travelRequests).subscribe(
      data =>{this.travelRequests =data;
        console.log(data);
      }
    );
  }
  uploadDocument(){
    this.travelRequests.documentStatus = 'uploaded';
    this.flag = true;
    if (this.file) {
      console.log(this.file);
      this.travelrequestService.uploadDocument(this.file, this.travelRequestId).subscribe(
        data => {
          console.log(data);
          data==true ? this.message='Uploaded Successfully' : 'Cannot Upload, Please try again Later.';
        }
      );
    }
  }
  

}
