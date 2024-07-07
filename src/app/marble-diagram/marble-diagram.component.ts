import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  EMPTY,
  Observable,
  concatMap,
  debounceTime,
  delay,
  from,
  fromEvent,
  interval,
  map,
  merge,
  mergeMap,
  of,
  pipe,
  scan,
  switchMap,
  take,
  throttleTime,
  withLatestFrom,
} from 'rxjs';

export interface Student {
  name: string;
  age: number;
}
class StudentClass {
  name = '';
  age = 5;
}
@Component({
  selector: 'app-marble-diagram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marble-diagram.component.html',
  styleUrl: './marble-diagram.component.css',
})
export class MarbleDiagramComponent implements OnInit {
  elements: any[] = [];
  ngOnInit(): void {
    const letters = of('a', 'b', 'c');
    const result = letters.pipe(
      mergeMap(x => interval(1000).pipe(map(i => x + i)))
    );

    this.realTimeObservation(result, 2000);
  }
  realTimeObservation<T>(observable: Observable<T>, delayWithMs: number) {
    observable
      .pipe(concatMap((x) => of(x).pipe(delay(delayWithMs))))
      .subscribe((data) => this.elements.push(data));
  }
}
