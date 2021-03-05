import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../models/userprofile.model';
import { UserProfileService } from '../services/userprofile.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-viewdetailsbyadmin',
  templateUrl: './viewdetailsbyadmin.component.html',
  styleUrls: ['./viewdetailsbyadmin.component.css']
})
export class ViewdetailsbyadminComponent implements OnInit {
  id:any=localStorage.getItem('Employeeid_FromAdmin');
  userprofile:any;
  employeedetails:UserProfile;
  formGroup:boolean=false;
  departmentandunitnames:any;
  AllDepartmentNames:any;
  AllBusinessUnitNames:any;
  selectedDepartmentName:any;
  selectedBusinessUnitName:any;

  
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
    this.userProfileService.GetAllDepartmentDetails().subscribe(
      user=>{this.AllDepartmentNames=user,
        console.log(this.AllDepartmentNames);}
        ) 
    this.userProfileService.GetAllBusinessUnitDetails().subscribe(
      user=>{this.AllBusinessUnitNames=user,
        console.log(this.AllBusinessUnitNames);}
        ) 
        
        
   }

   save(customerForm: NgForm) {
   
    //console.log('Saved: ' + JSON.stringify(customerForm.value));
  }

  ShowFormGroup()
  {
     //this.refid = userprofile.refid; 
     this.employeedetails.Role = this.userprofile[0].Role;
    //  this.selectedDepartmentName =  this.departmentandunitnames[0].Department_Name;
    //   this.selectedBusinessUnitName =  this.departmentandunitnames[0].Unit_Name;

    //  console.log(this.selectedDepartmentName);
    //  console.log(this.selectedBusinessUnitName);
     if(this.formGroup==true)
       this.formGroup = false;
     else  
       this.formGroup=true
  }

  EditDetails()
  {
    this.employeedetails.Department_id = this.selectedDepartmentName.Department_id;
    this.employeedetails.Unit_id = this.selectedBusinessUnitName.Unit_id; 

    console.log(this.employeedetails);
   this.userProfileService.EditDetailsByAdmin(this.id,this.employeedetails).subscribe(
     user=>{
       console.log("Called");}
       ) 
   window.location.reload();
  }

  ngOnInit(): void {
  }

}
