export class UserProfile{
    Employee_Id:number;
    First_Name: string;
    Last_Name:string;
    Role: string;
    Age: number;
    Gender: string;
    DOB: string;
    Email_id: string;
    mobile_number:string;
    Address: string;
    City: string;
    State:string;
    Pincode: number;
    working_under:string;
    Department_Name: string;
    Unit_Name: string;
    Unit_id:number;
    Department_id:number;

    constructor(Employee_Id:number=0,First_Name:string="",Last_Name:string="",Role:string="",Age:number=0,
    Gender:string="",DOB:string="",Email_id:string="",mobile_number:string="",Address:string="",
    City:string="",State:string="",Pincode:number=0,working_under:string="",Department_Name:string="",
    Unit_Name:string="",Unit_id:number=0,Department_id:number=0) {

        this.Employee_Id = Employee_Id;
        this.First_Name = First_Name;
        this.Last_Name = Last_Name;
        this.Role = Role;
        this.Age = Age;
        this.Gender = Gender;
        this.DOB = DOB;
        this.Email_id = Email_id;
        this.mobile_number = mobile_number;
        this.Address = Address;
        this.City = City;
        this.State = State;
        this.Pincode = Pincode;
        this.working_under = working_under;
        this.Department_Name = Department_Name;
        this.Unit_Name = Unit_Name;  
        this.Unit_id = Unit_id;
        this.Department_id = Department_id;     

    }

}