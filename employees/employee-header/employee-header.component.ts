import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/domain/employees';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-header',
  templateUrl: './employee-header.component.html',
  styleUrls: ['./employee-header.component.css']
})
export class EmployeeHeaderComponent implements OnInit{
    employee : Employees = new Employees();
    employeeId: number=0;
  
    constructor( private employeeService : EmployeesService, private router : Router){
      
    }
    ngOnInit(): void {
      this.employee = JSON.parse(sessionStorage.getItem('employee')+"");
      this.employeeId = this.employee.employeeId;
    }
  }
  