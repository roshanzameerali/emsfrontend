import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminDashboardService{

    constructor(private getHttp:HttpClient,private putHttp:HttpClient,private deleteHttp:HttpClient){
        
    }
    public getDetailsForAdminDashboardFromApi(){
        return this.getHttp.get("http://localhost:60000/api/AdminDashboard/");
    }

    public DeleteDetails(id:any){
        return this.deleteHttp.delete("http://localhost:60000/api/DeleteEmployee/?id="+id);
    }
     

}