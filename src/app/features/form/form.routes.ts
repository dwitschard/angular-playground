import {Route} from "@angular/router";
import {FormPageComponent} from "./container/form-page/form-page.component";
import {BasicFormComponent} from "./component/basic-form/basic-form.component";
import {ReactiveFormComponent} from "./component/reactive-form/reactive-form.component";
import {SignalFormComponent} from "./component/signal-form/signal-form.component";

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
        component: BasicFormComponent
      },
      {
        path: 'reactive',
        component: ReactiveFormComponent
      },
      {
        path: 'signal',
        component: SignalFormComponent
      }
    ]
  },
]
