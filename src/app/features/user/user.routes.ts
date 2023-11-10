import {Route} from "@angular/router";
import {UserPageComponent} from "./container/user-page/user-page.component";

export const USER_ROUTES: Route[] = [
  {
    path: '',
    component: UserPageComponent
  },
]
