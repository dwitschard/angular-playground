import {Component} from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import {UserTableComponent} from "../../component/user-table/user-table.component";
import {RouterOutlet} from "@angular/router";
import {UserService} from "../../service/user.service";
import {shareReplay} from "rxjs";

@Component({
  standalone: true,
  imports: [CommonModule, UserTableComponent, RouterOutlet, AsyncPipe],
  template: `
    <h1>Users</h1>

    @defer( when userList$ | async ) {
        <app-user-table [userList]="userList$ | async"></app-user-table>
    }

    @placeholder( ) {
      <!-- userList$ not yet loaded, therefore placeholder is shown -->
      <!-- placeholder is shown for a minimum of 500ms -->
      <!-- placeholder is always shown, also when going back and forth with browser navigation -->

      <div>Placeholder</div>
    }
  `,
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {

  public userList$ = this.userService.fetchUsers().pipe(
    shareReplay()
  );

  constructor(private userService: UserService) {
  }

}
