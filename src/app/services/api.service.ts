// src/app/services/github.service.ts
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private baseUrl: string = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getUserData(username: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${username}`);
  }

  getRepos(username: string): Observable<any[]> {
    const headers = new HttpHeaders({
      'Accept': 'application/vnd.github.mercy-preview+json' // Header for enabling topics
    });
    return this.http.get<any[]>(`${this.baseUrl}/${username}/repos`, { headers });
  }
}
