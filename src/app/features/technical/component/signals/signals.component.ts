import {Component, computed, effect, OnInit, signal} from '@angular/core';
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
export class SignalsComponent implements OnInit {

  public counter = signal(0);

  public isEven = computed(() => {
    console.log('count')
    return this.counter() % 2 === 0;
  });

  ngOnInit(): void {

    this.counter();

    this.counter.set(1)
    this.counter.update((current) => current + 1)

    this.counter()
  }

  constructor() {

    // Effect-API [Developer Preview]
    effect(() => {
      console.log(`The count is: ${this.counter()})`);

      // Use Cases:
      // 1) Logging displayed data (analytics, debugging)
      // 2) store the current value of the counter in local storage
      // 3) DOM-Manipulation that is not possible via template syntax
    });

  }

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

  incrementCounter() {
    this.counter.update((current) => current + 1)
  }
}
