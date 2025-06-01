import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-element.component.html',
  styleUrl: './counter-element.component.scss'
})
export class CounterElementComponent {

  title: string;
  counter: number;

  constructor() {
    this.title = 'Counter Component';
    this.counter = 0;
  }

  incrementFunc() {
    this.counter++;
  }

  decrementFunc() {
    this.counter--;
    if (this.counter < 0){
      console.error("Negative numbers doesn't work.")
      this.startFunc();
    }
  }

  startFunc(){
    this.counter = 0;
  }
}
