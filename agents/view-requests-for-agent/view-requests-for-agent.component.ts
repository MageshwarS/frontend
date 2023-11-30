import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agents } from 'src/app/domain/agents';
import { TravelRequests } from 'src/app/domain/travel-requests';
import { TravelRequestService } from 'src/app/services/travel-request.service';

@Component({
  selector: 'app-view-requests-for-agent',
  templateUrl: './view-requests-for-agent.component.html',
  styleUrls: ['./view-requests-for-agent.component.css']
})
export class ViewRequestsForAgentComponent implements OnInit{
  agent : Agents = new Agents();
  
  constructor(private router: Router, private travelRequestService : TravelRequestService, private activatedRoute : ActivatedRoute){}
  agentApproval : string = '';
  directorApproval : string = '';
  travelRequests : TravelRequests[] = [];
  ngOnInit(): void {
    this.agent = JSON.parse(sessionStorage.getItem('agent') +'')
    if(this.agent==null){this.router.navigate(['loginPage']);}

    this.agentApproval = this.activatedRoute.snapshot.params[('agentApproval')];
    console.log(this.agentApproval);

    if(this.agentApproval=='ReadyForBooking'){
      this.travelRequestService.getTravelRequestsReadyForBooking().subscribe(
        data=>{
          this.travelRequests = data;
          console.log(this.travelRequests);
        }
      );
    }else if(this.agentApproval=='Rejected'){
      this.directorApproval = 'pending';
      this.travelRequestService.getTravelRequestByDirectorApproval(this.directorApproval).subscribe(
        data => {this.travelRequests = data;
        console.log(data);
        }
      );
    }else{
      this.travelRequestService.getTravelRequestByManagerApproval(this.agentApproval).subscribe(
        data=>{ this.travelRequests = data;}
      );
    }
    console.log(this.travelRequests);
    
    
  }

}
