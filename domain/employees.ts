import { Slab } from "./slab";


export class Employees {
    employeeId: number = 0;
    employeeName: string = "";
    role: string = "";
    managerId: number = 0;
    slab: Slab = new Slab();
    projectName: string = "";
    email: string = "";
    employeePassword: string = "";
    loginStatus: string = "";
    count: number = 0;
}