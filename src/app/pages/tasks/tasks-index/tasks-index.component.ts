import { Component, OnInit, } from '@angular/core';
import {AfterViewInit,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Task } from 'src/app/interfaces/task-interface';



@Component({
  selector: 'app-task-index',
  templateUrl: './tasks-index.component.html',
  styleUrls: ['./tasks-index.component.scss']
})
export class TasksIndexComponent implements AfterViewInit {
  // viewMode: string = 'table';

  displayedColumns: string[] = ['name', 'status', 'assign', 'category','dateCreated','lastModified',];
  dataSource = new MatTableDataSource<Task>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // setViewModeHandler(mode: any){
  //   this.viewMode = mode;
  // }

}

const ELEMENT_DATA: Task[] = [
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H',dateCreated:'date',lastModified:'date'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H',dateCreated:'date',lastModified:'date'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H',dateCreated:'date',lastModified:'date'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H',dateCreated:'date',lastModified:'date'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H',dateCreated:'date',lastModified:'date'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H',dateCreated:'date',lastModified:'date'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H',dateCreated:'date',lastModified:'date'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H',dateCreated:'date',lastModified:'date'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H',dateCreated:'date',lastModified:'date'},
];