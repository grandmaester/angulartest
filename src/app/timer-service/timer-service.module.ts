import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TimerServiceRoutingModule } from './timer-service-routing.module';
import { TimerServiceComponent, TimeFormatPipe } from './timer-service.component';


@NgModule({
  declarations: [TimerServiceComponent, TimeFormatPipe],
  imports: [
    CommonModule,
    FormsModule,
    TimerServiceRoutingModule
  ]
})
export class TimerServiceModule { }
