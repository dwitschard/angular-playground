import {Component, signal, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormDataViewerComponent} from "../../../../shared/components/form-data-viewer/form-data-viewer.component";
import {FormData} from "../../../../shared/model/form-data.model";

@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, ReactiveFormsModule, FormDataViewerComponent],
  templateUrl: './control-flow.component.html',
  styleUrls: ['./control-flow.component.scss']
})
export class ControlFlowComponent {

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

  randomSuffix(): string {
    return '_' + Math.random() * 100;
  }
}
