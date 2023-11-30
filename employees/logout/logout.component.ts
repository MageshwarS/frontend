import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/domain/employees';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{
  employee : Employees = new Employees();
  employeeId : number  = 0;
  message : string = '';

  constructor(private employeeService : EmployeesService){}
  ngOnInit(): void {
    this.employee = JSON.parse(sessionStorage.getItem('employee')+'');
    this.employeeId = this.employee.employeeId;
    this.employeeService.employeeLogout(this.employeeId).subscribe(
      data=>{console.log(data);
        if(data){
          this.message = 'Successfully Logged Out!';
          console.log(this.message);
          
          sessionStorage.removeItem('employee');

        }else{
          this.message = 'Some Issue, yet to be fixed!';
        }
      }
    );


  }

}
