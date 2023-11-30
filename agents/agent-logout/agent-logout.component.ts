import { Component } from '@angular/core';
import { Agents } from 'src/app/domain/agents';
import { AgentsService } from 'src/app/services/agents.service';

@Component({
  selector: 'app-agent-logout',
  templateUrl: './agent-logout.component.html',
  styleUrls: ['./agent-logout.component.css']
})
export class AgentLogoutComponent {
  agent : Agents = new Agents();
  agentId: number = 0;
  message : string = '';

  constructor(private agentService : AgentsService){}
  ngOnInit(): void {
    this.agent = JSON.parse(sessionStorage.getItem('agent')+'');
    this.agentId = this.agent.agentId;
    this.agentService.agentLogout(this.agentId).subscribe(
      data=>{console.log(data);
        if(data){
          this.message = 'Successfully Logged Out!';
          sessionStorage.removeItem('agent');
        }else{
          this.message = 'Some Issue, yet to be fixed!';
        }
      }
    );


  }
}
