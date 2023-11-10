import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import {Link} from "../../../../shared/components/header/header.component";
import {filter} from "rxjs";

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTabsModule, RouterLink, RouterLinkActive],
  templateUrl: './technical-page.component.html',
  styleUrls: ['./technical-page.component.scss']
})
export class TechnicalPageComponent {

  public links: Link[] = [
    {text: 'Control Flow', url: 'control-flow'},
    {text: 'Signals', url: 'signal'},
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
