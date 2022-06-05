import { Injectable } from '@angular/core';
import { ProjectKey } from '../models/interfaces/project';
import { LocalStorageDataService } from './localstorage-data.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends LocalStorageDataService {

  constructor() {
    super();

    this.initialize();

    this.key = ProjectKey;
   }
}
