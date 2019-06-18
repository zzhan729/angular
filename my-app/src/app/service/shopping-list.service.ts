import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable, from} from "rxjs";
import {List} from '../model/list'

const httpOption ={
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  apiURL:string= "localhost:5000/api/lists";
    constructor(private httpClient: HttpClient ) {

     }
     getList():Observable<List[]> {
      return this.httpClient.get<List[]>(this.apiURL);
    }
}
