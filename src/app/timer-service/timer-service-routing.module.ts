import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimerServiceComponent } from './timer-service.component';

const routes: Routes = [{ path: '', component: TimerServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerServiceRoutingModule { }
