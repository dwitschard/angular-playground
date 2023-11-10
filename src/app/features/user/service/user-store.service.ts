import {Injectable, signal, WritableSignal} from '@angular/core';
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private _users: WritableSignal<User[]> = signal([])

  constructor() {
  }

  public readUsers(): User[] {
    return this._users()
  }

  public setUsers(users: User[]) {
    this._users.set(users)
    console.log(this._users())
  }

}
