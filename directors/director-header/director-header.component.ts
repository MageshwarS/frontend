import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from 'src/app/domain/employees';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-director-header',
  templateUrl: './director-header.component.html',
  styleUrls: ['./director-header.component.css']
})
export class DirectorHeaderComponent implements OnInit{
  employee : Employees = new Employees();
    employeeId: number=0;
    Pending : string = 'Pending';
    Approved : string = 'Approved';
    Rejected : string = 'Rejected';
    employeeRequests : boolean = false;
    managerRequests : boolean = false;
  
    constructor( private employeeService : EmployeesService, private router : Router){
      
    }
    ngOnInit(): void {
      this.employee = JSON.parse(sessionStorage.getItem('employee')+"");
      this.employeeId = this.employee.employeeId;
    }
}
