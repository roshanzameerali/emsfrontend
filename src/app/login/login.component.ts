import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Employee_id:number = 1000;
  Password:string = "manikkam222";
  Role:any;
  constructor(private loginService:LoginService) { 
    
  }

  Login()
  {
    this.loginService.Login(this.Employee_id,this.Password).subscribe(
      user=>{
        this.Role = user,
        console.log(this.Role)} )
  }

  ngOnInit(): void {
  }

}
