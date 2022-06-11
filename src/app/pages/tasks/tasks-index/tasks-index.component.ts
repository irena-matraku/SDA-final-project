import { Component, OnInit, } from '@angular/core';
import {AfterViewInit,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Category } from 'src/app/models/enum/category';
import { Status } from 'src/app/models/enum/status';
import { Task } from 'src/app/models/interfaces/task';
import { Tasks } from 'src/app/models/interfaces/task';
import { TaskService } from 'src/app/services/task.service';



@Component({
  selector: 'app-task-index',
  templateUrl: './tasks-index.component.html',
  styleUrls: ['./tasks-index.component.scss']
})
export class TasksIndexComponent implements AfterViewInit {
  tasks: Tasks;
  // viewMode: string = 'table';

  // displayedColumns: string[] = ['name', 'status', 'assign', 'category', 'edit'];
  displayedColumns: string[] = ['id', 'category', 'status', 'member'];
  dataSource: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private taskService: TaskService) {
     let tasks = <Tasks>this.taskService.all();
     this.tasks = tasks;
    //  console.log(tasks);
    this.dataSource = new MatTableDataSource<Task>(tasks);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }

  // setViewModeHandler(mode: any){
  //   this.viewMode = mode;
  // }

}

const ELEMENT_DATA: any[] = [
  {name: 'iirena', status: Status.COMPLETED, assign: '1.0079', category: Category.DESIGN},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H'},
  {name: 'iirena', status: 'Hydrogen', assign: '1.0079', category: 'H'},
];