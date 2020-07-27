import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-log-timestamp',
  templateUrl: './log-timestamp.component.html',
  styleUrls: ['./log-timestamp.component.scss']
})
export class LogTimestampComponent implements OnInit {
  @Input() timestamps: any;
  constructor() { }

  ngOnInit(): void {
  }

}
