import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  constructor() { }
  timerValue: number;
  startValue: number;
  pauseValue: number;
  timestamps: any[] = [];
  ngOnInit(): void {
  }
  updateTimerValue(str: number) {
    this.timerValue = str;
  }
  updateStartPressed(str: number) {
    this.startValue = str;
    this.timestamps.push({'event': 'Started', 'time': new Date().toLocaleString()});
  }
  updatePausePressed(str: number) {
    this.pauseValue = str;
    this.timestamps.push({'event': 'Paused', 'time': new Date().toLocaleString()});
  }
  resetTimeStamp(flag) {
    if(flag) {
      this.timestamps = [];
    }
  }

}
