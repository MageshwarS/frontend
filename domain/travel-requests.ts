import { Timestamp, timestamp } from "rxjs";
import { Employees } from "./employees";


export class TravelRequests {
    travelRequestId: number = 0;
    employees: Employees = new Employees();
    boardingPoint: string = "";
    destination: string = "";
    fromDate: Date = new Date();
    toDate: Date = new Date();
    managerApproval: string = "";
    agentApproval: string = "";
    directorApproval: string = "";
    estimate: number = 0;
    document ?: File;
    documentStatus: string = "";
    createdAt: Date = new Date();
    updatedAt: Date = new Date();
    transportationMode: string="";
    comments : string="";
    forex:number=0.0;
}