import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit, Signal, signal,
  TemplateRef,
  ViewChild,
  WritableSignal
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {fromEvent, map, Observable, tap} from "rxjs";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {Point} from "@angular/cdk/drag-drop";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-signal-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-form.component.html',
  styleUrl: './signal-form.component.scss'
})
export class SignalFormComponent {

  private clicked$: Observable<{ x: number, y:number }> = fromEvent<PointerEvent>(document, 'click').pipe(
    map(a => ({x: a.x, y: a.y}))
  )

  public lastClick = toSignal(
    this.clicked$,
    {initialValue: null}
  )




}
