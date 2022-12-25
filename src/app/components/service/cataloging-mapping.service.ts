import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogingMappingService {
 
  constructor(private http: HttpClient) { }
  uri: String = "http://localhost:8080/api"

  findAllCatalogingList():Observable<CatalogingMapping> {
    var url = `${this.uri}/project/cataloging/`
    return this.http.get<CatalogingMapping>(url)
  }
}
