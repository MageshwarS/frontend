import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Employees } from '../domain/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient: HttpClient) { }

  validateLogin(employee:Employees): Observable<Employees>{
    return this.httpClient.post<Employees>("http://localhost:8081/employee/login",employee);
  }
  getEmployeeById(employeeId:number):Observable<Employees>{
    return this.httpClient.get<Employees>('http://localhost:8081/allemployees/'+employeeId)
  }

  employeeLogout(employeeId:number): Observable<boolean>{
    return this.httpClient.get<boolean>('http://localhost:8081/employee/logout/' +employeeId);
  }
}