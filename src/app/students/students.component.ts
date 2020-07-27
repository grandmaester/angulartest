import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import students from '../../assets/students.json';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'class', 'section', 'english', 'maths', 'science'];
  students = new MatTableDataSource(students);
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor() { }

  ngOnInit(): void {
    this.students.sort = this.sort;
  }

}
