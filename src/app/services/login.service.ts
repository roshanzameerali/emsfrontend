import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register.model';

@Injectable()
export class LoginService{

    constructor(private getHttp:HttpClient,private postHttp:HttpClient,private putHttp:HttpClient){
        
    }
    public Login(id:number,Password:string){
        return this.postHttp.get("http://localhost:60000/api/Login/?id=1000&password=manikkam222");
    }
     

}