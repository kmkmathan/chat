import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

/**
 * handle headers for request
 * @param {'application/json' } 'Content-Type'
 */
let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers});
let fileHeaders = new Headers({ 'Content-Type': undefined});
let fileOptions = new RequestOptions({
        headers: headers });


@Injectable()
export class HttpService {

constructor(private http:Http) { }
    
    /**
     * HTTP Get method 
     * @param {string} url used to get data 
     */

    getMethod(url) {

        return this.http.get(url).map(res=> {

            //console.log(res)
            return res.json()
        })
    }
    
    /**
     * 
     * HTTP Get Method    
     * @param {string} url  used to send a data
     * @param {object} data  
     */
    
    postMethod(url,data) {

        return this.http.post(url, data).map(res=>{
            return res.json()
        })
    }

    /**
     * 
     * HTTP Get Method    
     * @param {string} url  used to send a data
     * @param {object} data  
     */
    
    filePostMethod(url,data) {


        return this.http.post(url, data).map(res=>{

            //console.log(res)
             return res.json()
        })
    }
}