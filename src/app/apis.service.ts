import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http:HttpClient) { }

    getColgList(name:String){
    let url= "http://universities.hipolabs.com/search?country="+name;
    return this.http.get(url);
  }
}
