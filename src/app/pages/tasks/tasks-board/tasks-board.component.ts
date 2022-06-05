import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'task-board',
  templateUrl: './tasks-board.component.html',
  styleUrls: ['./tasks-board.component.scss']
})
export class TasksBoardComponent implements OnInit{
  ngOnInit(): void {
  }

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