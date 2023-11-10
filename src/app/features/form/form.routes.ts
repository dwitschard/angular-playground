import {Route} from "@angular/router";
import {FormPageComponent} from "./container/form-page/form-page.component";

export const FORM_ROUTES: Route[] = [
  {
    path: '',
    component: FormPageComponent,
    children: [
      {
        path: '',
        pathMatch: "full",
        redirectTo: 'basic'
      },
      {
        path: 'basic',
        loadComponent: () => import('./component/basic-form/basic-form.component').then((x) => x.BasicFormComponent)
      },
      {
        path: 'signal',
        loadComponent: () => import('./component/signal-form/signal-form.component').then((x) => x.SignalFormComponent)
      }
    ]
  },
]
