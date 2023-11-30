import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from 'src/app/domain/employees';

@Component({
  selector: 'app-director-home',
  templateUrl: './director-home.component.html',
  styleUrls: ['./director-home.component.css']
})
export class DirectorHomeComponent implements OnInit{

  constructor(private router: Router){}
  employee : Employees = new Employees();
  employeeId : number = 0;
  ngOnInit(): void {
    this.employee = JSON.parse(sessionStorage.getItem('employee')||'');
    if(this.employee==null){this.router.navigate(['loginPage']);}
    this.employeeId = this.employee.employeeId;
    this.router.navigate(['profile/'+this.employeeId]);
  }

}
