import { Time } from "@angular/common";
import { TravelRequests } from "./travel-requests";

export class Bookings{

    travelRequests:TravelRequests=new TravelRequests();  
    bookingId:number=0;
    hotelName:string="";
    hotelLocation:string="";
    checkInTime:string= "";
    checkOutTime:string= "";
    transportationMode:string="";
    flightTicket:string="";
    busTicket:string="";
    trainPnr:string="";
    ticket ?: File;
    }