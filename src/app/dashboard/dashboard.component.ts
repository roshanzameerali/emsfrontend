import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../models/userprofile.model';
import { UserProfileService } from '../services/userprofile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  id:any=localStorage.getItem('Employee_id');
  //id:any=1002;
  formGroup:boolean=false;
  userprofile:any;
  employeedetails:UserProfile;
  
  departmentandunitnames:any
  constructor(private userProfileService:UserProfileService) {
    this.employeedetails = new UserProfile();
    this.userProfileService.getUserProfileFromApi(this.id).subscribe(
      user=>{this.userprofile=user,
        console.log(this.userprofile);}
        )  
    
    this.userProfileService.getDepartmentAndUnitNamesFromApi(this.id).subscribe(
      user=>{this.departmentandunitnames=user,
        console.log(this.departmentandunitnames);}
        )  

   }

   ShowFormGroup()
   {
      //this.refid = userprofile.refid; 
      this.employeedetails.Email_id =  this.userprofile[0].Email_id;
      this.employeedetails.mobile_number =  this.userprofile[0].mobile_number;
      this.employeedetails.Address =  this.userprofile[0].Address;
      this.employeedetails.City =  this.userprofile[0].City;
      this.employeedetails.State =  this.userprofile[0].State;
      this.employeedetails.Pincode =  this.userprofile[0].Pincode;
      if(this.formGroup==true)
        this.formGroup = false;
      else  
        this.formGroup=true
   }


   EditEmailDetails()
   {
    this.userProfileService.UpdateEmailId(this.id,this.employeedetails).subscribe(
      user=>{
        console.log("Called");}
        ) 
    window.location.reload();
   }

   EditMobileNumberDetails()
   {
    this.userProfileService.UpdateMobileNumber(this.id,this.employeedetails).subscribe(
      user=>{
        console.log("Called");}
        )
        window.location.reload(); 
   }

   EditAddressDetails()
   {
    this.userProfileService.UpdateAddress(this.id,this.employeedetails).subscribe(
      user=>{
        console.log("Called");}
        ) 

        window.location.reload();
   }

   EditCityDetails()
   {
    this.userProfileService.UpdateCity(this.id,this.employeedetails).subscribe(
      user=>{
        console.log("Called");}
        ) 
        window.location.reload();
   }

   EditStateDetails()
   {
    this.userProfileService.UpdateState(this.id,this.employeedetails).subscribe(
      user=>{
        console.log("Called");}
        ) 
        window.location.reload();
   }

   EditPincodeDetails()
   {
    this.userProfileService.UpdatePincode(this.id,this.employeedetails).subscribe(
      user=>{
        console.log("Called");}
        ) 
        window.location.reload();
   }

  ngOnInit(): void {
  }

}
