import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import {Link} from "../../../../shared/components/header/header.component";

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTabsModule, RouterLink, RouterLinkActive],
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  public links: Link[] = [
    {text: 'Basic Form', url: './basic'},
    {text: 'Reactive Form', url: './reactive'}
  ]

  public activeLink: Link = this.links[0];


  constructor(private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.activeRoute.snapshot);
    const currentSelection = this.links.find(link => this.activeRoute.snapshot.url.toString().includes(link.url))
    console.log(currentSelection)
    if (currentSelection) {
      this.activeLink = currentSelection
    }
  }
}
