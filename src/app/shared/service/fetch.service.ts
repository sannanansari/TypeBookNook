import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chapter } from '../models/Chapter';
import { environment } from 'src/app/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }

  fetchChapter(): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(`${environment.my_url}/Chapter`)
  }
}
