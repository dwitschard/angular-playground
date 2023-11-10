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
    path: 'form',
    loadChildren: () => import('./features/form/form.routes').then(mod => mod.FORM_ROUTES)
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
