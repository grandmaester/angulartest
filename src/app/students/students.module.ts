import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';


@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
