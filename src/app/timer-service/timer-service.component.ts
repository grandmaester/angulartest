import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';

@Injectable()
export class TimerService {
  getCounter(tick) {
    return timer(0, tick);
  }
}

@Component({
  selector: 'app-timer-service',
  templateUrl: './timer-service.component.html',
  styleUrls: ['./timer-service.component.scss'],
  providers: [TimerService],
})
export class TimerServiceComponent implements OnInit, OnDestroy {
  countDown: Subscription;
  counter: number;
  timerObject: any;
  startValue: number = 0;
  pauseValue: number = 0;
  timestamps: any[] = [];
  tick = 1000;
  constructor(private timerService: TimerService) {}
  ngOnInit() {}
  startTimer() {
    if (!this.countDown) {
      this.startValue++;
      this.timestamps.push({'event': 'Started', 'time': new Date().toLocaleString()});
      this.countDown = this.timerService
        .getCounter(this.tick)
        .subscribe(() => this.counter--);
    } else {
      this.countDown.unsubscribe();
      this.countDown = null;
      this.pauseValue++;
      this.timestamps.push({'event': 'Paused', 'time': new Date().toLocaleString()});
    }
  }
  resetTimer() {
    this.startValue = 0;
    this.pauseValue = 0;
    this.counter = 0;
    this.timestamps = [];
  }
  ngOnDestroy() {
    this.countDown = null;
  }
}
@Pipe({
  name: 'timeFormat',
})
export class TimeFormatPipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ('00' + minutes).slice(-2) +
      ':' +
      ('00' + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}
