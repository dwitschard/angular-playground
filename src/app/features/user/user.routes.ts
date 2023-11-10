import {Route} from "@angular/router";
import {UserTableComponent} from "./component/user-table/user-table.component";
import {UserPageComponent} from "./container/user-page/user-page.component";

export const USER_ROUTES: Route[] = [
  {
    path: '',
    component: UserPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview'
      },
      {
        path: 'overview',
        component: UserTableComponent
      }
    ]
  },
]
