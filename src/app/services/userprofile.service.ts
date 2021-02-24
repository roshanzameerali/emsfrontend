import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProfileService{

    constructor(private getHttp:HttpClient,private putHttp:HttpClient){
        
    }
    public getUserProfileFromApi(id:any){
        return this.getHttp.get("http://localhost:60000/api/UserProfile/"+id);
    }
     

}