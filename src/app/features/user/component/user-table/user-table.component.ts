import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {User} from "../../model/user.model";
import {EMPTY, Observable} from "rxjs";

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {

  @Input({required: true})
  public userList: User[] | null | undefined = []

}
