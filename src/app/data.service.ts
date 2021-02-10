import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  private url = "/api/users";

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.url + '/' + id);
  }

  createUser(User: User): Observable<User> {
    return this.http.post<User>(this.url, User);
  }
  
  updateUser(User: User): Observable<User> {

    return this.http.put<User>(this.url, User);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(this.url + '/' + id);
  }
}
