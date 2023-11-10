import {Component, computed} from '@angular/core';
import {CommonModule} from '@angular/common';
import {fromEvent, map, Observable} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-signal-form',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  private clicked$: Observable<{ x: number, y: number }> = fromEvent<PointerEvent>(document, 'click').pipe(
    map(a => ({x: a.x, y: a.y}))
  )

  public lastClick = toSignal(
    this.clicked$,
    {initialValue: null}
  )

  public wasClickInTopRightCorner = computed(() => {
    const windowHeightMiddle = window.innerHeight / 2
    const windowWidthMiddle = window.innerWidth / 2

    const lastClick = this.lastClick()
    return !!(lastClick && lastClick.x > windowWidthMiddle && lastClick.y < windowHeightMiddle);
  })

}
