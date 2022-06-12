import { Injectable } from '@angular/core';
import { UsersKey } from '../models/interfaces/user';
import { LocalStorageDataService } from './localstorage-data.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends LocalStorageDataService {
  constructor() {
    super();

    this.initialize();

    this.key = UsersKey;
  }
}
