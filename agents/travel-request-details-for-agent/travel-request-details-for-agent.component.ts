import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agents } from 'src/app/domain/agents';
import { TravelRequests } from 'src/app/domain/travel-requests';
import { TravelRequestService } from 'src/app/services/travel-request.service';

@Component({
  selector: 'app-travel-request-details-for-agent',
  templateUrl: './travel-request-details-for-agent.component.html',
  styleUrls: ['./travel-request-details-for-agent.component.css']
})
export class TravelRequestDetailsForAgentComponent implements OnInit{
  travelRequests:TravelRequests=new TravelRequests();
  travelRequestId:number=0;
  agentId :number = 0;
  agent : Agents  = new Agents();
  flag : boolean = false;
  slabValidated :boolean = false;
  approve: boolean = false;
  message : string = '';
  international: string[] = ['Dubai'];
  local: string[] = ['Chennai', 'Mumbai', 'Delhi'];
  slabExceedReason : string = '';
  oneAEDinINR : number = 22.69;

  constructor(private router: Router ,private activatedRouter:ActivatedRoute ,private travelrequestService:TravelRequestService){}

  ngOnInit(): void {

    this.agent = JSON.parse(sessionStorage.getItem('agent')+'');
    if(this.agent==null){this.router.navigate(['loginPage']);}
    this.agentId = this.agent.agentId;
    this.travelRequestId=this.activatedRouter.snapshot.params['travelRequestId'];
    this.travelrequestService.getRequestDetailsById(this.travelRequestId).subscribe(
      data=>{
        this.travelRequests=data;
        console.log(data);
      }
    )
  }

  updateapprovalbyAgent( agentApproval :string){
    this.travelRequests.agentApproval = agentApproval;
    if(agentApproval=='rejected'){this.travelRequests.directorApproval='pending'}
    if(agentApproval=='approved'){this.travelRequests.documentStatus='requested'; this.travelRequests.comments='yet to book'}
    console.log(this.travelRequests);
    
    this.travelrequestService.updateApproval(this.travelRequests).subscribe(
      data =>{this.travelRequests =data;
        console.log(data);
        this.flag = true;
        agentApproval=='approved' ? this.message = 'Approved Successfully and Requested Documents' : this.message = 'Request Rejected';
      }
    );
  }

  validateSlab(){
    this.travelrequestService.updateApproval(this.travelRequests).subscribe(
      data =>{this.travelRequests =data;
        console.log(data);
        // this.flag = true;
        this.slabValidated = true;
        if(this.travelRequests.employees.slab.maxBudget >= this.travelRequests.estimate + (this.travelRequests.forex * this.oneAEDinINR)){
          this.approve = true;
        }else{
          this.approve = false;
          this.slabExceedReason = this.slabExceedReason + 'Budget Exceeded.\n';
        }
        
        // ['Mumbai', 'Chennai', 'Dubai', 'Delhi']
        console.log(this.travelRequests.employees.slab.internationalTravelAllowed);
        if((this.international.includes(this.travelRequests.boardingPoint) && this.local.includes(this.travelRequests.destination)) || ( this.local.includes(this.travelRequests.boardingPoint) && this.international.includes(this.travelRequests.destination))){
          if(this.travelRequests.employees.slab.internationalTravelAllowed=='no'){ 
            console.log(this.travelRequests.employees.slab.internationalTravelAllowed);
            this.approve = false;
            this.slabExceedReason = this.slabExceedReason + 'International Travel Not Allowed.\n';
          }
        }
        if(this.travelRequests.transportationMode=='Flight' && this.travelRequests.employees.slab.flightTravelAllowed=='no'){
          this.approve=false;
          this.slabExceedReason = this.slabExceedReason + 'Flight travel not Allowed.\n';
        }
        this.travelRequests.comments = this.slabExceedReason;
      }
    );
    
  }

  book(){
    this.router.navigate(['agent/bookTravel/' + this.travelRequestId]);
  }
}
