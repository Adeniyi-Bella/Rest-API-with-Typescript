import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpResponse } from '../interface/httpRespone';

@Injectable({ providedIn: 'root' })
export class PatientService {
  private readonly API_BASE_URL = 'http://192.168.8.13:3000';

  constructor(private http: HttpClient) { }

  getPatients(): Observable<CustomHttpResponse> {
    return this.http.get<CustomHttpResponse>(`${this.API_BASE_URL}/patients`);
  }


}