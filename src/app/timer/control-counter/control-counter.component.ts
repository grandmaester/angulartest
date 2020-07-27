import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control-counter',
  templateUrl: './control-counter.component.html',
  styleUrls: ['./control-counter.component.scss']
})
export class ControlCounterComponent implements OnInit {
  timerLimit: number;
  timerObject: any;
  startBtnCounter: number = 0;
  pausedBtnCounter: number = 0;
  @Output() onTextEntered = new EventEmitter();
  @Output() onStartPressed = new EventEmitter();
  @Output() onPausePressed = new EventEmitter();
  @Output() resetTimeStamp = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  updateCounter() {
    this.onTextEntered.emit(this.timerLimit);
  }

  startTimer() {
    if(!this.timerObject) {
      var _this = this;
      _this.startBtnCounter++;
      _this.onStartPressed.emit(_this.startBtnCounter);
      this.timerObject = setInterval(function() {
        if(_this.timerLimit > 0) {
          _this.timerLimit -= 1;
          _this.onTextEntered.emit(_this.timerLimit);
        } else  {
          clearInterval(_this.timerObject);
          _this.timerObject = '';
        }
      }, 1000);
    } else {
      clearInterval(this.timerObject);
      this.timerObject = '';
      this.pausedBtnCounter++;
      this.onPausePressed.emit(this.pausedBtnCounter);
    }

  }
  resetTimer() {
    this.timerLimit = 0;
    this.startBtnCounter = 0;
    this.pausedBtnCounter = 0;
    this.onTextEntered.emit(this.timerLimit);
    this.onStartPressed.emit(this.startBtnCounter);
    this.onPausePressed.emit(this.pausedBtnCounter);
    this.resetTimeStamp.emit(true);
  }
}
