import {Route} from "@angular/router";
import {WelcomePageComponent} from "./features/welcome/container/welcome-page.component";

export const APP_ROUTES: Route[] = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: "full"
  },
  {
    path: 'welcome',
    component: WelcomePageComponent
  },
  {
    path: 'tech',
    loadChildren: () => import('./features/tech/technical.routes').then(mod => mod.TECH_ROUTES)
  },
  {
    path: 'user',
    loadChildren: () => import('./features/user/user.routes').then(mod => mod.USER_ROUTES)
  },
  {
    path: '**',
    redirectTo: ''
  },

]
