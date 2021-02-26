import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminDashboardService{

    constructor(private getHttp:HttpClient,private putHttp:HttpClient){
        
    }
    public getDetailsForAdminDashboardFromApi(){
        return this.getHttp.get("http://localhost:60000/api/AdminDashboard/");
    }
     

}