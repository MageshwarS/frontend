import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookings } from 'src/app/domain/bookings';
import { TravelRequests } from 'src/app/domain/travel-requests';
import { BookingsService } from 'src/app/services/bookings.service';
import { TravelRequestService } from 'src/app/services/travel-request.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit{

  travelRequest: TravelRequests = new TravelRequests();
  booking : Bookings = new Bookings();
  travelRequestId : number = 0;
  flag : boolean = false;
  mailFlag : boolean = false;
  file ?:File;
  hotels: string[] =[ 'ITC', 'Holiday IN','Taj', 'Rain Tree'];
  sendMailClicked : boolean = false;
  onChange(event : any){
    this.file = event.target.files[0];
  }
  constructor(private bookingService:BookingsService , private activatedRoute : ActivatedRoute,private travelService : TravelRequestService, private router: Router){}
  ngOnInit(): void {
    this.travelRequestId= this.activatedRoute.snapshot.params[('travelRequestId')];
    
    this.travelService.getRequestDetailsById(this.travelRequestId).subscribe(
      data=>{
         this.travelRequest=data;
         console.log(data);
         this.booking.travelRequests= this.travelRequest;
      }
    )
  }

  submit() {
    console.log(this.booking);
    this.booking.travelRequests= this.travelRequest;
    console.log(this.booking);
    this.bookingService.addNewBooking(this.booking).subscribe(
      data=>{
          console.log(data);
          this.flag=true;
          
      }
    );

    
    this.travelRequest.comments = 'booked';
    this.travelService.updateApproval(this.travelRequest).subscribe(
      data=>{this.travelRequest = data;
        console.log(data);
        
      }
    );

    
    
    
  }

  sendMail(){
    this.sendMailClicked = true;
    this.bookingService.sendMail(this.travelRequestId).subscribe(
      data=>{
        console.log(data);
        this.mailFlag=data;
        this.sendMailClicked = !data;
        
      }
    );
  }
  
  back(){
    this.router.navigate(['/agent/view-requests/ReadyForBooking']);
  }
}
