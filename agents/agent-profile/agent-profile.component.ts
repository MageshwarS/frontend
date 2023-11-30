import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agents } from 'src/app/domain/agents';
import { AgentsService } from 'src/app/services/agents.service';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.css']
})
export class AgentProfileComponent implements OnInit{

  agent: Agents = new Agents();
  email : boolean = false;
  constructor(private agentService : AgentsService, private router : Router){}
  ngOnInit(): void {
    this.agent = JSON.parse(sessionStorage.getItem('agent') +"");
    if(this.agent==null){this.router.navigate(['loginPage']);}
    this.agentService.getAgentById(this.agent.agentId).subscribe(
      data => {this.agent= data;}
    );
  }

}
