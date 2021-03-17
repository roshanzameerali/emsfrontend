import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetPeers } from '../models/getpeers.model';



@Injectable()
export class OrgChartService{

    constructor(private getHttp:HttpClient,private postHttp:HttpClient,private putHttp:HttpClient){
        
    }
    public getPeersFromApi(getPeers:GetPeers){
        return this.postHttp.post("http://localhost:60000/api/GetPeers/",getPeers);
    }
}