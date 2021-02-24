import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register.model';

@Injectable()
export class RegisterService{

    constructor(private getHttp:HttpClient,private postHttp:HttpClient,private putHttp:HttpClient){
        
    }
    public RegisterTheDetails(register:Register){
        return this.postHttp.post("http://localhost:60000/api/Registration/",register);
    }
     

}