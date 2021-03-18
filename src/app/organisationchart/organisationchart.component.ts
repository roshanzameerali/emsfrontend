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
  working_under: any;
  constructor(private orgchartService:OrgChartService) {
    this.getPeers = new GetPeers();
    this.getPeers.Employee_id = localStorage.getItem('EmployeeIdForOrgChart');
    this.getPeers.working_under = localStorage.getItem('WorkingUnderForOrgChart');
    this.orgchartService.getPeersFromApi(this.getPeers).subscribe(
      user=>{this.peers=user,
        console.log(this.peers);
        this.working_under = this.peers[0].working_under;}
        )
    
   }

  ngOnInit(): void {
  }

}
