import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



import { AgentHomeComponent } from './agents/agent-home/agent-home.component';
import { AddNewTravelRequestComponent } from './travel-requests/add-new-travel-request/add-new-travel-request.component';
import { TravelRequestDetailsComponent } from './travel-requests/travel-request-details/travel-request-details.component';

import { LoginComponent } from './login/login.component';
import { EmployeeHomeComponent } from './employees/employee-home/employee-home.component';
import { ManagerHomeComponent } from './managers/manager-home/manager-home.component';
import { DirectorHomeComponent } from './directors/director-home/director-home.component';
import { EmployeeHeaderComponent } from './employees/employee-header/employee-header.component';
import { EmployeeFooterComponent } from './employees/employee-footer/employee-footer.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewTravelRequestByIdComponent } from './travel-requests/view-travel-request-by-id/view-travel-request-by-id.component';
import { AgentHeaderComponent } from './agents/agent-header/agent-header.component';
import { AgentProfileComponent } from './agents/agent-profile/agent-profile.component';
import { ViewRequestsForAgentComponent } from './agents/view-requests-for-agent/view-requests-for-agent.component';
import { ManagerHeaderComponent } from './managers/manager-header/manager-header.component';
import { ViewRequestsForManagerComponent } from './managers/view-requests-for-manager/view-requests-for-manager.component';
import { LogoutComponent } from './employees/logout/logout.component';
import { AgentLogoutComponent } from './agents/agent-logout/agent-logout.component';
import { DirectorHeaderComponent } from './directors/director-header/director-header.component';
import { TravelRequestDetailsForManagerComponent } from './managers/travel-request-details-for-manager/travel-request-details-for-manager.component';
import { TravelRequestDetailsForAgentComponent } from './agents/travel-request-details-for-agent/travel-request-details-for-agent.component';
import { ViewRequestsForDirectorComponent } from './directors/view-requests-for-director/view-requests-for-director.component';
import { TravelRequestDetailsForDirectorComponent } from './directors/travel-request-details-for-director/travel-request-details-for-director.component';
import { BookingFormComponent } from './agents/booking-form/booking-form.component';
import { ViewBookingsComponent } from './employees/view-bookings/view-bookings.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeHomeComponent,
    ManagerHomeComponent,
    DirectorHomeComponent,
    AgentHomeComponent,
    AddNewTravelRequestComponent,
    TravelRequestDetailsComponent,
    EmployeeHeaderComponent,
    EmployeeFooterComponent,
    ProfileComponent,
    ViewTravelRequestByIdComponent,
    AgentHeaderComponent,
    AgentProfileComponent,
    ViewRequestsForAgentComponent,
    ManagerHeaderComponent,
    ViewRequestsForManagerComponent,
    LogoutComponent,
    AgentLogoutComponent,
    DirectorHeaderComponent,
    TravelRequestDetailsForManagerComponent,
    TravelRequestDetailsForAgentComponent,
    ViewRequestsForDirectorComponent,
    TravelRequestDetailsForDirectorComponent,
    BookingFormComponent,
    ViewBookingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
