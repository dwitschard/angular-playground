import {Injectable} from '@angular/core';
import {User} from "../model/user.model";
import {delay, Observable} from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>('./assets/user/users.json').pipe(
      delay(1000)
    )
  }
}
