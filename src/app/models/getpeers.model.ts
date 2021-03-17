export class GetPeers{
    Employee_id:string;   
    working_under: string;
    

    constructor(Employee_id:string="1010",working_under:string="1000") {
        this.Employee_id = Employee_id;       
        this.working_under = working_under;              

    }

}