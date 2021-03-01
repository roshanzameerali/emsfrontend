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

    public UpdateEmailId(id:any,userprofile:UserProfile){
        return this.putHttp.put("http://localhost:60000/EditDetails/EditEmail/?id="+id,userprofile);
    }

    public UpdateMobileNumber(id:any,userprofile:UserProfile){
        return this.putHttp.put("http://localhost:60000/EditDetails/EditMobileNumber/?id="+id,userprofile);
    }

    public UpdateAddress(id:any,userprofile:UserProfile){
        return this.putHttp.put("http://localhost:60000/EditDetails/EditAddress/?id="+id,userprofile);
    }

    public UpdateCity(id:any,userprofile:UserProfile){
        return this.putHttp.put("http://localhost:60000/EditDetails/EditCity/?id="+id,userprofile);
    }

    public UpdateState(id:any,userprofile:UserProfile){
        return this.putHttp.put("http://localhost:60000/EditDetails/EditState/?id="+id,userprofile);
    }

    public UpdatePincode(id:any,userprofile:UserProfile){
        return this.putHttp.put("http://localhost:60000/EditDetails/EditPincode/?id="+id,userprofile);
    }
    
     

}