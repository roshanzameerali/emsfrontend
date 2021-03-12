import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileService } from './services/userprofile.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterService } from './services/register.service';
import { FormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminDashboardService } from './services/admindashboard.service';
import { TempregComponent } from './tempreg/tempreg.component';
import { ViewdetailsbyadminComponent } from './viewdetailsbyadmin/viewdetailsbyadmin.component';
import { LogoutComponent } from './logout/logout.component';
//import { MustMatchDirective } from './_helpers/must-match.directive';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AdmindashboardComponent,
    TempregComponent,
    ViewdetailsbyadminComponent,
    LogoutComponent,
    //MustMatchDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserProfileService, RegisterService,LoginService,AdminDashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
