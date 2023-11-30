import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agents } from 'src/app/domain/agents';
import { TravelRequests } from 'src/app/domain/travel-requests';
import { AgentsService } from 'src/app/services/agents.service';
import { TravelRequestService } from 'src/app/services/travel-request.service';

@Component({
  selector: 'app-agent-home',
  templateUrl: './agent-home.component.html',
  styleUrls: ['./agent-home.component.css']
})
export class AgentHomeComponent implements OnInit {
  agents:Agents=new Agents();
  agentId:number=0;
  managerApproval:string="approved";
  travelRequest : TravelRequests[]=[];

  constructor(private activatedRoute : ActivatedRoute,private agentsService :AgentsService,private router :Router, private travelRequestService : TravelRequestService){}

  ngOnInit() {
    this.agents = JSON.parse(sessionStorage.getItem('agent') +'')
    if(this.agents==null){this.router.navigate(['loginPage']);}

    this.agentId=this.activatedRoute.snapshot.params['agentId'];
    this.agentsService.getAgentById(this.agentId).subscribe(
      data=>{
        this.agents=data;
        console.log(data);
      }
    );
    this.router.navigate(['agent-profile/'+this.agentId]);
    // this.travelRequestService.getTravelRequestByManagerApproval(this.managerApproval).subscribe(
    //   data=>{
    //     this.travelRequest=data;
    //     console.log(data);
    //   }
    // );
  }

}
