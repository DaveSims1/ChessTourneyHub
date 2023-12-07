// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = "mongodb+srv://David:21CLvDwr97yFkae5@atlascluster.sb92ikf.mongodb.net/chesstourneyhub?retryWrites=true&w=majority";

  constructor(private http: HttpClient) {}

  getTournaments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
