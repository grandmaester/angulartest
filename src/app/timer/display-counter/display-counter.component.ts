import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.scss']
})
export class DisplayCounterComponent implements OnInit {

  constructor() { }
  @Input() timerValue
  ngOnInit(): void {
  }

}
