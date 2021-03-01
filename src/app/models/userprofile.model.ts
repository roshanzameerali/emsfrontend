export class UserProfile{
    Employee_Id:number;
    Name: string;
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
    Department_Name: string;
    Unit_Name: string;

    constructor(Employee_Id:number=0,Name:string="",Role:string="",Age:number=0,
    Gender:string="",DOB:string="",Email_id:string="",mobile_number:string="",Address:string="",
    City:string="",State:string="",Pincode:number=0,Department_Name:string="",
    Unit_Name:string="") {

        this.Employee_Id = Employee_Id;
        this.Name = Name;
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
        this.Department_Name = Department_Name;
        this.Unit_Name = Unit_Name;       

    }

}