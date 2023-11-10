import {Component, Input} from '@angular/core';
import {CommonModule, NgFor, NgForOf, UpperCasePipe} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";

export interface Link {
  text: string,
  url: string
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgFor, NgForOf, RouterLink, MatIconModule, MatButtonModule, MatToolbarModule, UpperCasePipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input({required: true}) links: Link[] = []

}
