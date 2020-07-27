import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from "@angular/forms";

import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { DisplayCounterComponent } from './display-counter/display-counter.component';
import { ControlCounterComponent } from './control-counter/control-counter.component';
import { LogTimestampComponent } from './log-timestamp/log-timestamp.component';
import { CountClicksComponent } from './count-clicks/count-clicks.component';


@NgModule({
  declarations: [TimerComponent, DisplayCounterComponent, ControlCounterComponent, LogTimestampComponent, CountClicksComponent],
  imports: [
    CommonModule,
    TimerRoutingModule,
    FormsModule,
  ]
})
export class TimerModule { }
