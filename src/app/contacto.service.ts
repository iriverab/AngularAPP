import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { contact } from './model/contacts';

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

  public Actualizar(obj:contact)
  {
    return this.http.put<contact>(`${this.apiURL}/contacts/` + obj._id,obj);
  }

  public Ingresar(obj:contact)
  {
    return this.http.post<contact>(`${this.apiURL}/contacts/`,obj);
  }  

  public Eliminar(obj:contact)
  {
    return this.http.delete<contact>(`${this.apiURL}/contacts/` + obj._id);
  }
}
