import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeHomeComponent } from './employees/employee-home/employee-home.component';

import { LoginComponent } from './login/login.component';
import { AgentHomeComponent } from './agents/agent-home/agent-home.component';
import { AddNewTravelRequestComponent } from './travel-requests/add-new-travel-request/add-new-travel-request.component';
import { TravelRequestDetailsComponent } from './travel-requests/travel-request-details/travel-request-details.component';
import { ManagerHomeComponent } from './managers/manager-home/manager-home.component';
import { DirectorHomeComponent } from './directors/director-home/director-home.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewTravelRequestByIdComponent } from './travel-requests/view-travel-request-by-id/view-travel-request-by-id.component';
import { AgentProfileComponent } from './agents/agent-profile/agent-profile.component';
import { ViewRequestsForAgentComponent } from './agents/view-requests-for-agent/view-requests-for-agent.component';
import { ViewRequestsForManagerComponent } from './managers/view-requests-for-manager/view-requests-for-manager.component';
import { LogoutComponent } from './employees/logout/logout.component';
import { AgentLogoutComponent } from './agents/agent-logout/agent-logout.component';
import { TravelRequestDetailsForManagerComponent } from './managers/travel-request-details-for-manager/travel-request-details-for-manager.component';
import { TravelRequestDetailsForAgentComponent } from './agents/travel-request-details-for-agent/travel-request-details-for-agent.component';
import { ViewRequestsForDirectorComponent } from './directors/view-requests-for-director/view-requests-for-director.component';
import { TravelRequestDetailsForDirectorComponent } from './directors/travel-request-details-for-director/travel-request-details-for-director.component';
import { BookingFormComponent } from './agents/booking-form/booking-form.component';
import { ViewBookingsComponent } from './employees/view-bookings/view-bookings.component';

const routes: Routes = [
  {path: '' , redirectTo: 'loginPage' , pathMatch: 'full'},
  {path:"loginPage", component:LoginComponent},
  

  {path:"employee-home/:employeeId", component:EmployeeHomeComponent},
  {path:"profile/:employeeId", component:ProfileComponent},
  {path:"requests-sent/:employeeId", component:ViewTravelRequestByIdComponent},
  {path:"new-request/:employeeId", component:AddNewTravelRequestComponent},
  {path:"view-request/:travelRequestId",component:TravelRequestDetailsComponent},
  {path:"view-bookings", component:ViewBookingsComponent},
  {path:"employee/logout", component:LogoutComponent},

  {path:"manager-home/:employeeId", component:ManagerHomeComponent},
  {path:"manager/view-requests/:managerApproval", component:ViewRequestsForManagerComponent},
  {path:"manager/request-details/:travelRequestId", component:TravelRequestDetailsForManagerComponent},

  {path:"director-home/:employeeId", component:DirectorHomeComponent},
  {path:"director/view-requests/:directorApproval", component:ViewRequestsForDirectorComponent},
  {path:"director/request-details/:travelRequestId", component:TravelRequestDetailsForDirectorComponent},

  {path:"agent-home/:agentId", component:AgentHomeComponent},
  {path:"agent-profile/:agentId", component:AgentProfileComponent},
  {path:"agent/view-requests/:agentApproval", component:ViewRequestsForAgentComponent},
  {path:"agent/request-details/:travelRequestId", component:TravelRequestDetailsForAgentComponent},
  {path:"agent/bookTravel/:travelRequestId", component:BookingFormComponent},
  {path:"agent/logout", component:AgentLogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
