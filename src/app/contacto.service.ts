import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private apiURL = 'http://localhost:8080/api';  // URL to web api
  constructor(private http: HttpClient) { }

  public getData()
  {
    return this.http.get<any[]>(`${this.apiURL}/contacts`);
  }
}
