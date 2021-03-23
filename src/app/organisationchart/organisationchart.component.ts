import { Component, OnInit } from '@angular/core';
import { GetPeers } from '../models/getpeers.model';
import { OrgChartService } from '../services/orgchart.service';

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
  WorkingUnderDetails:any;
  PeerCount:number = 0;
  index:number=0;
  employeeadditionaldetails:any;
  constructor(private orgchartService:OrgChartService) {
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

   ViewDetails()
   {
     this.PeerCount = this.peers.length;
     
     for(var peer of this.peers) {
       console.log(peer.Employee_id);
       this.orgchartService.viewDetails(peer.Employee_id).subscribe(
        user=>{this.employeeadditionaldetails=user,
          console.log(this.employeeadditionaldetails);}
         // this.working_under = this.peers[0].working_under;
          )
     }
      
     }
    
   

  ngOnInit(): void {
  }

}
