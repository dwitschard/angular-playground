import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  template: `
      <mat-toolbar></mat-toolbar>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

}
