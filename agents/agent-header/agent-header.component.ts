import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agents } from 'src/app/domain/agents';

@Component({
  selector: 'app-agent-header',
  templateUrl: './agent-header.component.html',
  styleUrls: ['./agent-header.component.css']
})
export class AgentHeaderComponent {
  agent : Agents = new Agents();
  agentId: number=0;
  approved : string = 'Approved';
  pending : string = 'Pending';
  rejected : string = 'Rejected';
  readyForBooking : string = 'ReadyForBooking';
  constructor(private activatedRoute: ActivatedRoute, private router : Router){
    
  }
  ngOnInit(): void {
    this.agent = JSON.parse(sessionStorage.getItem('agent')+"");
    this.agentId = this.agent.agentId;
  }
}
