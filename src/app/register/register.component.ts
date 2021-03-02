import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register.model';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:Register;
  registerreturn:any;
  constructor(private registerService:RegisterService) { 
    this.register = new Register();
    
  }

  

  Register()
  {
   //   this.tblcustomer.email_id = this.userprofile[6];
    
    this.registerService.RegisterTheDetails(this.register).subscribe(
     user=>{this.registerreturn = user,
      console.log(this.registerreturn),
       console.log("Called")} )

     
    
  }


  ngOnInit(): void {
  }

}
