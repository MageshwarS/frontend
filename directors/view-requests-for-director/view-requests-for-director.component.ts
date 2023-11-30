import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/domain/employees';
import { TravelRequests } from 'src/app/domain/travel-requests';
import { TravelRequestService } from 'src/app/services/travel-request.service';

@Component({
  selector: 'app-view-requests-for-director',
  templateUrl: './view-requests-for-director.component.html',
  styleUrls: ['./view-requests-for-director.component.css']
})
export class ViewRequestsForDirectorComponent implements OnInit{
  constructor(private travelRequestService : TravelRequestService, private activatedRoute : ActivatedRoute, private router:Router){}
  directorApproval : string = '';
  employee : Employees = new Employees();
  employeeId:number = 0;
  travelRequests : TravelRequests[] = [];

  ngOnInit(): void {
    this.employee = JSON.parse(sessionStorage.getItem('employee') +'')
    if(this.employee==null){this.router.navigate(['loginPage']);}

    this.employeeId = this.employee.employeeId;
    this.directorApproval = this.activatedRoute.snapshot.params[('directorApproval')];
    this.travelRequestService.getTravelRequestByDirectorApproval(this.directorApproval).subscribe(
      data=>{ this.travelRequests = data;
      console.log(this.travelRequests);
      }
    );
  }
}
