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
  constructor(private orgchartService:OrgChartService) {
    this.orgchartService.getPeersFromApi(this.getPeers).subscribe(
      user=>{this.peers=user,
        console.log(this.peers);}
        )
   }

  ngOnInit(): void {
  }

}
