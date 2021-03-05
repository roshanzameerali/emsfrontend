import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProfile } from '../models/userprofile.model';

@Injectable()
export class UserProfileService{

    constructor(private getHttp:HttpClient,private putHttp:HttpClient){
        
    }
    public getUserProfileFromApi(id:any){
        return this.getHttp.get("http://localhost:60000/api/UserProfile/"+id);
    }

    public getDepartmentAndUnitNamesFromApi(id:any){
        return this.getHttp.get("http://localhost:60000/api/GetDepartmentAndUnitNames/"+id);
    }

    public UpdateDetails(id:any,userprofile:UserProfile){
        return this.putHttp.put("http://localhost:60000/api/UpdateByEmployee/?id="+id,userprofile);
    }

    public EditDetailsByAdmin(id:any,userprofile:UserProfile){
        return this.putHttp.put("http://localhost:60000/EditDetailsByAdmin/EditRole/?id="+id,userprofile);
    }

    public GetAllDepartmentDetails(){
        return this.getHttp.get("http://localhost:60000/GetDepartmentAndBusinessDetails/GetDepartmentDetails/");
    }  
    
    public GetAllBusinessUnitDetails(){
        return this.getHttp.get("http://localhost:60000/GetDepartmentAndBusinessDetails/GetBusinessUnitDetails/");
    }

}