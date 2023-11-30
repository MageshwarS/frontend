import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bookings } from '../domain/bookings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private httpClient : HttpClient) { }

  addNewBooking(bookings : Bookings):Observable<boolean>{
    return this.httpClient.post<boolean>('http://localhost:8081/bookingsapi/bookings', bookings);
  }

  getBookingsByEmployeeId(employeeId :number):Observable<Bookings[]>{
    return this.httpClient.get<Bookings[]>('http://localhost:8081/bookingsapi/bookingsList/'+employeeId);
  }

  getBookingByRequestId(travelRequestId : number):Observable<Bookings>{
    return this.httpClient.get<Bookings>('http://localhost:8081/bookingsapi/getbookings/'+travelRequestId);
  }

  uploadTicket(file: any, travelRequestId:number) : Observable<boolean>{

    console.log(file);
    const formData = new FormData();  
    formData.append("file", file, file.name); 
    console.log(formData);
    return this.httpClient.post<boolean>("http://localhost:8081/bookingsapi/uploadTicket/"+travelRequestId,formData);
  }

  sendMail(travelRequestId : number): Observable<boolean>{
    return this.httpClient.get<boolean>("http://localhost:8081/bookingsapi/mail/"+travelRequestId);
  }
}