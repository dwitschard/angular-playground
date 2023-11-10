import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormData} from "../../model/form-data.model";

@Component({
  selector: 'app-form-data-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-data-viewer.component.html',
  styleUrl: './form-data-viewer.component.scss'
})
export class FormDataViewerComponent {

  @Input({required: true})
  public data!: FormData;

}
