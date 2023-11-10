import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserTableComponent} from "../../component/user-table/user-table.component";
import {RouterOutlet} from "@angular/router";

@Component({
  standalone: true,
  imports: [CommonModule, UserTableComponent, RouterOutlet],
  template: `
      <router-outlet></router-outlet>
  `,
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {

}
