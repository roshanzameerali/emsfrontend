import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../services/userprofile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  id:any=localStorage.getItem('Employee_id');
  userprofile:any;
  constructor(private userProfileService:UserProfileService) {
    this.userProfileService.getUserProfileFromApi(this.id).subscribe(
      user=>{this.userprofile=user,
        console.log(this.userprofile);}
        )  

   }

  ngOnInit(): void {
  }

}
