import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-clicks',
  templateUrl: './count-clicks.component.html',
  styleUrls: ['./count-clicks.component.scss']
})
export class CountClicksComponent implements OnInit {
  @Input() startValue: number;
  @Input() pauseValue: number;
  constructor() { }

  ngOnInit(): void {
  }

}
