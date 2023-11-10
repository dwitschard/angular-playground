import {Component} from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import {UserTableComponent} from "../../component/user-table/user-table.component";
import {RouterOutlet} from "@angular/router";
import {UserService} from "../../service/user.service";
import {shareReplay} from "rxjs";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  standalone: true,
  imports: [CommonModule, UserTableComponent, RouterOutlet, AsyncPipe, MatProgressSpinnerModule],
  template: `
    <h1>Users</h1>

    @defer( when userList$ | async ) {
        <app-user-table [userList]="userList$ | async"></app-user-table>
    }

    @placeholder( ) {
      <!-- userList$ not yet loaded, therefore placeholder is shown -->
      <!-- placeholder is shown for a minimum of 500ms -->
      <!-- placeholder is always shown, also when going back and forth with browser navigation -->

        <mat-spinner strokeWidth="2" diameter="25" ></mat-spinner>
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
