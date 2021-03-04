import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register.model';
import { RegisterService } from '../services/register.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-tempreg',
  templateUrl: './tempreg.component.html',
  styleUrls: ['./tempreg.component.css']
})
export class TempregComponent implements OnInit {
  register:Register;
  registerreturn:any;
  referenceid:string;
  constructor(private registerService:RegisterService) { 
    this.register = new Register();
    this.register !== undefined;
  }

  save(customerForm: NgForm) {

    //console.log('Saved: ' + JSON.stringify(customerForm.value));
  }

  Register()
  {
   //   this.tblcustomer.email_id = this.userprofile[6];
    
    this.registerService.RegisterTheDetails(this.register).subscribe(
     user=>{this.registerreturn = user,
      this.referenceid = this.registerreturn[0],      
      console.log(this.referenceid),
       console.log("Called")} )

     
    
  }

  ngOnInit(): void {
    
  }

}
