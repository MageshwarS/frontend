import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Agents } from '../domain/agents';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  constructor(private httpClient: HttpClient) { }

  validateLogin(agents:Agents): Observable<Agents>{
    return this.httpClient.post<Agents>("http://localhost:8081/agentapi/agents/agentlogin",agents);
  }

  getAgentById(agentId:number):Observable<Agents>{
    return this.httpClient.get<Agents>("http://localhost:8081/agentapi/agents/"+agentId);
  }

  agentLogout(agentId : number): Observable<boolean>{
    return this.httpClient.get<boolean>("http://localhost:8081/agentapi/logout/"+agentId);
  }
}
