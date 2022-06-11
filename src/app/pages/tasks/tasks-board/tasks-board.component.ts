import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Input } from '@angular/core';
import { Tasks } from 'src/app/models/interfaces/task';
import { Status } from 'src/app/models/enum/status';

@Component({
  selector: 'task-board',
  templateUrl: './tasks-board.component.html',
  styleUrls: ['./tasks-board.component.scss']
})
export class TasksBoardComponent implements OnInit{
@Input() tasks: Tasks = [];
grouppedTasks: any;
statuses: any = [];

  constructor(){
    
  }

  ngOnInit(): void {
    this.statuses = Object.values(Status);
    this.grouppedTasks = this.groupBy(this.tasks, 'status');
    console.log(this.grouppedTasks);
  }

  groupBy = function(xs: any, key: any) {
    return xs.reduce(function(rv: any, x: any) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };


  backlog = ['Fall asleep'];

  done = ['Get up', 'Walk dog'];

  in_progress = ['Get up', ' teeth', ' a shower', 'Check e-mail', 'Walk dog'];

  completed = [' up', 'Brush teeth', 'Take a shower', ' e-mail', ' dog'];




  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}