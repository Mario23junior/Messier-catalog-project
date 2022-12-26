import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObservationParameters } from '../models/ObservationParameters';

@Injectable({
  providedIn: 'root'
})
export class ObservationParametersService {

  constructor(public http: HttpClient) { }

  uri: String = "http://localhost:8080/api"

  findAllObservationParameters() {
    var base = "/project/observationParameters/"
    var url = `${this.uri}${base}`
    return this.http.get<ObservationParameters[]>(url)
  }
}
