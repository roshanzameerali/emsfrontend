import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from '../services/admindashboard.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  admindashboard_details:any;
  constructor(private adminDashboardService:AdminDashboardService) { 
    this.adminDashboardService.getDetailsForAdminDashboardFromApi().subscribe(
      user=>{this.admindashboard_details=user,
        console.log(this.admindashboard_details);}
        )  
  }

  ngOnInit(): void {
  }

}
