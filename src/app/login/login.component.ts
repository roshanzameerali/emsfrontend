import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login.model';
import { LoginService } from '../services/login.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login;
  
  Role:any;
  constructor(private loginService:LoginService,private router:Router) { 
    this.login = new Login();
  }

  save(customerForm: NgForm) {

    //console.log('Saved: ' + JSON.stringify(customerForm.value));
  }

  Login()
  {
    this.loginService.Login(this.login).subscribe(
      user=>{
        this.Role = user,
        console.log(this.Role)
        this.Role.toString();
        if(this.Role[0] == null || this.Role[0] == "")
        this.Role = "Invalid User" ;
        else if (this.Role[0] === "Admin")
        {
          localStorage.setItem('Employee_id',this.login.Employee_Id);
          this.router.navigateByUrl('/admindashboard');
        }
        else 
        {
          localStorage.setItem('Employee_id',this.login.Employee_Id);
          this.router.navigateByUrl('/dashboard');
          console.log("[\"Admin\"]");
        }
      
      })    
      
       
      
  }

  

  ngOnInit(): void {
  }

}
