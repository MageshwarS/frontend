import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TravelRequests } from '../domain/travel-requests';

@Injectable({
  providedIn: 'root'
})
export class TravelRequestService {

  constructor(private httpClient : HttpClient) { }


  getTravelRequestByEmployeeId(employeeId:number):Observable<TravelRequests[]>{
    return this.httpClient.get<TravelRequests[]>(' http://localhost:8081/travelRequests/requestbyemployee/'+employeeId)
  }
  addTravelRequest(travelRequest:TravelRequests):Observable<boolean>{
    return this.httpClient.post<boolean>('http://localhost:8081/travelRequests/request',travelRequest)
  }
  getRequestDetailsById(travelRequestId:number):Observable<TravelRequests>{
    return this.httpClient.get<TravelRequests>('http://localhost:8081/travelRequests/request/'+travelRequestId);
  }
  getRequestsByManagerId(managerApproval :string, managerId:number):Observable<TravelRequests[]>{
    return this.httpClient.get<TravelRequests[]>('http://localhost:8081/travelRequests/requestsbyemployees/'+ managerApproval+ '/'+managerId);
  }
  getTravelRequestByManagerApproval(agentApproval : string):Observable<TravelRequests[]>{
    return this.httpClient.get<TravelRequests[]>('http://localhost:8081/travelRequests/requestbyAgentapproval/'+agentApproval);
  }


  getTravelRequestByDirectorApproval(directorApproval : string) : Observable<TravelRequests[]>{
    return this.httpClient.get<TravelRequests[]>('http://localhost:8081/travelRequests/requestbyManagerapproval/'+directorApproval);
  }

  getTravelRequestsReadyForBooking() : Observable<TravelRequests[]>{
    return this.httpClient.get<TravelRequests[]>('http://localhost:8081/travelRequests/readyForBooking');
  }

  updateApproval(travelRequest :TravelRequests): Observable<TravelRequests>{
    return this.httpClient.put<TravelRequests>('http://localhost:8081/travelRequests/request', travelRequest);
  }

  uploadDocument(file: any, travelRequestId:number) : Observable<boolean>{

    console.log(file);
    const formData = new FormData();  
    formData.append("file", file, file.name); 
    console.log(formData);
    return this.httpClient.post<boolean>("http://localhost:8081/travelRequests/upload/"+travelRequestId,formData);
  }
}
