import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../models/userprofile.model';
import { AdminDashboardService } from '../services/admindashboard.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  admindashboard_details:any;
  formGroup:boolean=false;
  employeedetails:UserProfile;
  id:string="";
  constructor(private adminDashboardService:AdminDashboardService,private route:Router) { 
    this.employeedetails = new UserProfile();
    this.adminDashboardService.getDetailsForAdminDashboardFromApi().subscribe(
      user=>{this.admindashboard_details=user,
        console.log(this.admindashboard_details);}
        )  
  }

  save(customerForm: NgForm) {

    //console.log('Saved: ' + JSON.stringify(customerForm.value));
  }


  ShowViewDetails(id:string)
  {
      localStorage.setItem('Employeeid_FromAdmin',id);
      this.route.navigateByUrl('/viewdetailsbyadmin');
      console.log(id);
  }

  DeleteDetails(id:string)
  { 
      console.log(id);
      this.adminDashboardService.DeleteDetails(id).subscribe(
        user=>{this.admindashboard_details=user,
          console.log(this.admindashboard_details);}
          )  
  }

  // DeleteDetails(id:string)
  // {
  //   console.log(this.id);
    
  // }

  ngOnInit(): void {
  }

}
