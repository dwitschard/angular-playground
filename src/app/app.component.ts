import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent, Link} from "./shared/components/header/header.component";
import {FooterComponent} from "./shared/components/footer/footer.component";

@Component({
  selector: 'app-root',
  template:
    `
      <div class="app-container">
        <app-header class="app-header" [links]="applicationLinks"></app-header>
        <div class="router-outlet">
          <router-outlet></router-outlet>
        </div>
        <app-footer class="footer"></app-footer>
      </div>
    `,
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class AppComponent {

  public applicationLinks: Link[] = [
    {text: "Technical", url: './tech'},
    {text: "User", url: './user'},
  ]
}
