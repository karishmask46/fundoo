import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpclient: HttpClient) { }
  postservice(url: any, data: any, token: boolean = false, options: any) {

    return this.httpclient.post(url, data, token && options)
  }
  getservice(url: any, token: boolean = false, options: any) {
    
    return this.httpclient.get(url, token && options)
  }
  putservice(url:any,token:boolean=false,options:any) {

    return this.httpclient.get(url,token && options)
  }
  deleteservice(url:any,token:boolean=false,options:any) {
    return this.httpclient.delete(url,token && options)
   }
}
