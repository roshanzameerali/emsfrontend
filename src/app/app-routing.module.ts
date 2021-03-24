import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { TempregComponent } from './tempreg/tempreg.component';
import { ViewdetailsbyadminComponent } from './viewdetailsbyadmin/viewdetailsbyadmin.component';
import { OrganisationchartComponent } from './organisationchart/organisationchart.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthenticationGuard]},
  { path: 'admindashboard', component: AdmindashboardComponent,canActivate:[AuthenticationGuard]},
  {path: 'tempreg', component: TempregComponent},
  {path: 'viewdetailsbyadmin', component: ViewdetailsbyadminComponent,canActivate:[AuthenticationGuard]},
  {path: 'logout', component: LogoutComponent},
  {path: 'organisationchart', component: OrganisationchartComponent,canActivate:[AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent,RegisterComponent,
LoginComponent,DashboardComponent,AdmindashboardComponent,TempregComponent,ViewdetailsbyadminComponent,LogoutComponent,
OrganisationchartComponent]