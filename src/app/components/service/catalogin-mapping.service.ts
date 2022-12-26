import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatalogingMapping } from '../models/CatalogingMapping';

@Injectable({
  providedIn: 'root'
})
export class CataloginMappingService {

  constructor(public http: HttpClient) { }

  uri: String = "http://localhost:8080/api"

  findAllCatalogingMapping() {
    var base = "/api/project/cataloging/"
    var url = `${this.uri}${base}`
    return this.http.get<CatalogingMapping[]>(url)
  }
}
