import { Injectable } from '@angular/core';
import { Role } from '../models/enum/role';
import { Status } from '../models/enum/status';
import { ProjectKey, Projects } from '../models/interfaces/project';
import { Tasks, TasksKey } from '../models/interfaces/task';
import { Users, UsersKey } from '../models/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageDataService {
  key: string = '';

  /**
   * Temporary method
   *
   * @deprecated
   */
  initialize(): void {
    const projects = [
      {
        id: 1,
        title: 'Fix mobile login page',
        description: 'bla bla bla bla bla bla bla',
        categories: 'Design',
        status: 'To be done',
      },
      {
        id: 2,
        title: 'Second bla bla bla',
        description: 'Revogar credenciais para equipe de infra',
        categories: 'Development',
        status: Status.IN_PROGRESS,
      },
    ];

    const users: Users = [
      {
        id: 0,
        name: 'Paula',
        lastName: 'Xhindoli',
        email: 'paula@test.com',
        password: 'test',
        role: Role.ADMINISTRATOR,
      },
    ];

    const tasks: Tasks = [
      {
        id: 1,
        category: { name: 'Development' },
        status: Status.IN_PROGRESS,
        member: users[0],
        date: new Date(),
        description: 'Task description',
        title: 'First task',
      },
      {
        id: 2,
        category: { name: 'Development' },
        status: Status.TO_BE_DONE,
        member: users[0],
        date: new Date(),
        description: 'Task description',
        title: 'Second task',
      },
    ];

    localStorage.setItem(ProjectKey, JSON.stringify(projects));
    localStorage.setItem(TasksKey, JSON.stringify(tasks));
    localStorage.setItem(UsersKey, JSON.stringify(users));
  }

  /**
   * Get all items from localStorage
   *
   * @returns array
   */
  all() {
    let items = localStorage.getItem(this.key);

    return JSON.parse(items || '{}');
  }

  /**
   * Get single item from localStorage
   *
   * @param id
   * @returns item
   */
  get(id: number) {
    return this.all().find((i: any) => i.id == id);
  }

  /**
   *
   * @param item
   */
  create(item: any) {
    let items = this.all();

    items.push(item);

    this.set(items);
  }

  /**
   * @param id
   * @param newItem
   */
  update(id: number, newItem: any) {
    let items = this.all();

    let elementIdx = items.findIndex((item: any) => item.id === id);
    if (elementIdx > -1) {
      items[elementIdx] = newItem;
    }

    this.set(items);
  }

  private set(items: any): void {
    localStorage.setItem(this.key, JSON.stringify(items));
  }
}
