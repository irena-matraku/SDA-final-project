import { Component, OnInit, } from '@angular/core';
import {AfterViewInit,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Task } from 'src/app/interfaces/task-interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'status', 'assign', 'category'];
  dataSource = new MatTableDataSource<Task>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

const ELEMENT_DATA: Task[] = [
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H'},
];