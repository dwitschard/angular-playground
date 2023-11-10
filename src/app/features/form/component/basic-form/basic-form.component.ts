import {Component, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormData} from "../../model/form-data.model";
import {FormDataViewerComponent} from "../form-data-viewer/form-data-viewer.component";

@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, ReactiveFormsModule, FormDataViewerComponent],
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent {

  public showData: WritableSignal<boolean> = signal(false)
  public data: WritableSignal<FormData[]> = signal([])

  public form: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder) {
  }

  submitForm(formDirective: FormGroupDirective) {
    if (this.form.valid) {
      this.data.update(data => [...data, this.form.value])

      formDirective.resetForm()
      this.form.reset()
    }
  }
}
