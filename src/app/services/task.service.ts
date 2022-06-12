import { Injectable } from '@angular/core';
import { TasksKey } from '../models/interfaces/task';
import { LocalStorageDataService } from './localstorage-data.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService extends LocalStorageDataService {
  constructor() {
    super();

    this.initialize();

    this.key = TasksKey;
  }
}
