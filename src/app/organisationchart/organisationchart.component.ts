import { Component, OnInit } from '@angular/core';
import { GetPeers } from '../models/getpeers.model';
import { OrgChartService } from '../services/orgchart.service';
import { UserProfileService } from '../services/userprofile.service';

@Component({
  selector: 'app-organisationchart',
  templateUrl: './organisationchart.component.html',
  styleUrls: ['./organisationchart.component.css']
})
export class OrganisationchartComponent implements OnInit {
  getPeers:GetPeers;
  peers:any;
  employeedetails:any;
  working_under: any;
  immediate_manager:string = localStorage.getItem("WorkingUnderForOrgChart");
  WorkingUnderDetails:any;
  PeerCount:number = 0;
  index:number=0;
  employeeadditionaldetails:any;
  userprofile:any;
  formGroup:boolean = false;
  constructor(private orgchartService:OrgChartService,private userProfileService:UserProfileService) {
    // this.userProfileService.getUserProfileFromApi(this.getPeers.Employee_id).subscribe(
    //   user=>{this.userprofile=user,
    //     console.log(this.userprofile);
    //    }
    //     ) 
    this.getPeers = new GetPeers();
    this.getPeers.Employee_id = localStorage.getItem('EmployeeIdForOrgChart');
    this.getPeers.working_under = localStorage.getItem('WorkingUnderForOrgChart');
    this.orgchartService.getPeersFromApi(this.getPeers).subscribe(
      user=>{this.peers=user,
        console.log(this.peers);
        this.working_under = this.peers[0].working_under;
        this.orgchartService.viewDetails(this.working_under).subscribe(
          user=>{this.WorkingUnderDetails=user,
            console.log(this.WorkingUnderDetails);}
            // this.working_under = this.peers[0].working_under;
            )}
        )
       // console.log(this.getPeers.Employee_id);
    this.orgchartService.viewDetails(this.getPeers.Employee_id).subscribe(
      user=>{this.employeedetails=user,
        console.log(this.employeedetails);}
       // this.working_under = this.peers[0].working_under;
        )
    
    
    
   }

   GoAboveDisplay()
   {
      
     
   }

   GoAboveChart(working_under:any)
   {
    if(this.formGroup==true)
    this.formGroup = false;
    else  {
      
    this.userProfileService.getUserProfileFromApi(this.working_under).subscribe(
      user=>{this.userprofile=user,
        console.log(this.userprofile);
        localStorage.setItem('EmployeeIdForOrgChart',this.working_under);
        localStorage.setItem('WorkingUnderForOrgChart',this.userprofile[0].working_under);
        this.getPeers.Employee_id = localStorage.getItem('EmployeeIdForOrgChart');
        this.getPeers.working_under = localStorage.getItem('WorkingUnderForOrgChart');
        this.orgchartService.getPeersFromApi(this.getPeers).subscribe(
          user=>{this.peers=user,
            console.log(this.peers);
           // this.working_under = this.peers[0].working_under;
            this.orgchartService.viewDetails(this.peers[0].working_under).subscribe(
              user=>{this.WorkingUnderDetails=user,
                console.log(this.WorkingUnderDetails);}
                // this.working_under = this.peers[0].working_under;
                )}
            )
            // console.log(this.getPeers.Employee_id);
        this.orgchartService.viewDetails(this.getPeers.Employee_id).subscribe(
          user=>{this.employeedetails=user,
            console.log(this.employeedetails);}
            // this.working_under = this.peers[0].working_under;
            ) }
        ) 
        window.location.reload();
  }
    
  
        
     
   }

    
   

  ngOnInit(): void {
  }

}
