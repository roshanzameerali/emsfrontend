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
  
  constructor(private registerService:RegisterService) { 
    this.register = new Register();
    
  }

  

  Register()
  {
   //   this.tblcustomer.email_id = this.userprofile[6];
    
    this.registerService.RegisterTheDetails(this.register).subscribe(
     user=>{console.log("Called")} )
    
  }


  ngOnInit(): void {
  }

}
