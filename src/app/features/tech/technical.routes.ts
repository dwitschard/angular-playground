import {Route} from "@angular/router";
import {TechnicalPageComponent} from "./container/technical-page/technical-page.component";

export const TECH_ROUTES: Route[] = [
  {
    path: '',
    component: TechnicalPageComponent,
    children: [
      {
        path: '',
        pathMatch: "full",
        redirectTo: 'control-flow'
      },
      {
        path: 'control-flow',
        loadComponent: () => import('./component/control-flow/control-flow.component').then((x) => x.ControlFlowComponent)
      },
      {
        path: 'signal',
        loadComponent: () => import('./component/signals/signals.component').then((x) => x.SignalsComponent)
      }
    ]
  },
]
