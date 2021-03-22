export class Register{
    Employee_Id:number;
    First_Name: string;
    Last_Name:string;
    Password: string;
    Confirm_Password:string;
    Age: number;
    Gender: string;
    Role:string;
    DOB: string;
    Email_id: string;
    mobile_number: string;
    Address: string;
    City: string;
    State:string;
    Pincode: number;
    working_under:string;

    constructor(Employee_Id:number=0,First_Name:string="",Last_Name:string="",Password:string="",Confirm_Password:string="",
    Age:number=18,Gender:string="",Role:string="Not Assigned",DOB:string="",Email_id:string="",mobile_number: string="",Address:string="",
    City:string="",State:string="",Pincode:number=0,working_under:string="Not Assigned") {

        this.Employee_Id = Employee_Id;
        this.First_Name = First_Name;
        this.Last_Name = Last_Name;
        this.Password = Password;
        this.Confirm_Password = Confirm_Password;
        this.Age = Age;
        this.Gender = Gender;
        this.Role = Role;
        this.DOB = DOB;
        this.Email_id = Email_id;
        this.mobile_number = mobile_number;
        this.Address = Address;
        this.City = City;
        this.State = State;
        this.Pincode = Pincode;
            

    }

}