import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import {Link} from "../../../../shared/components/header/header.component";
import {filter} from "rxjs";

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTabsModule, RouterLink, RouterLinkActive],
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent {

  public links: Link[] = [
    {text: 'Basic Form', url: 'basic'},
    {text: 'Reactive Form', url: 'reactive'}
  ]

  public activeLink: Link = this.links[0];

  constructor(private activeRoute: ActivatedRoute, private router: Router) {

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
          this.activeLink = this.links.find(link => this.router.url.includes(link.url)) ?? this.links[0]
        }
      );
  }
}
