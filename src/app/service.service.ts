import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  getallurl='http://localhost:3000/language/getalllang'
  constructor(private http:HttpClient) { }
  getLanguage(){
    return this.http.get(this.getallurl) 
  }

}
