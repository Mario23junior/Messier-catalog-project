import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeepObject } from '../models/DeepObject';

@Injectable({
  providedIn: 'root'
})
export class DeepObjectService {

  constructor(public http: HttpClient) { }
  uri: String = "http://localhost:8080/api"

  findAllCatalogingList(): Observable<DeepObject[]> {
     var base = "/project/catalog/"
    var url = `${this.uri}${base}`
     return this.http.get<DeepObject[]>(url)
  }
}
