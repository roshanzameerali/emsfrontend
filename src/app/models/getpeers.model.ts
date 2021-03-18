export class GetPeers{
    Employee_id:string;   
    working_under: string;
    

    constructor(Employee_id:string="",working_under:string="") {
        this.Employee_id = Employee_id;       
        this.working_under = working_under;              

    }

}