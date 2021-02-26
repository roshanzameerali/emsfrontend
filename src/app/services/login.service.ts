import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';


@Injectable()
export class LoginService{

    constructor(private getHttp:HttpClient,private postHttp:HttpClient,private putHttp:HttpClient){
        
    }
    public Login(login:Login){
        return this.postHttp.post("http://localhost:60000/api/Login/",login);
    }
     

}