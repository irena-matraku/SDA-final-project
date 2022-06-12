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

    if(localStorage.getItem('dummyDataLoaded') != '1') {
      const projects = [
        {
          id: 1,
          title: 'Fix mobile login page',
          description: 'This is a short description of the project',
          categories: 'Design',
          status: Status.TO_BE_DONE,
        },
        {
          id: 2,
          title: 'App Certificate update',
          description: 'Revogar credenciais para equipe de infra',
          categories: 'Development',
          members: 'team_members',
          status: Status.IN_PROGRESS,
        },
        {
          id: 3,
          title: 'iOS App Small fixes',
          description: 'Revogar credenciais para equipe de infra',
          categories: 'Development',
          status: Status.COMPLETED,
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
          {
            id: 1,
            name: 'Irena',
            lastName: 'Matraku',
            email: 'irena@test.com',
            password: 'test',
            role: Role.ADMINISTRATOR,
          },
          {
            id: 2,
            name: 'Marjo',
            lastName: 'Ceca',
            email: 'Marjo@test.com',
            password: 'test',
            role: Role.MEMBER,
          },
          {
            id: 3,
            name: 'Klaudio',
            lastName: 'Bendaj',
            email: 'igli@test.com',
            password: 'test',
            role: Role.ADMINISTRATOR,
          },
          {
            id: 4,
            name: 'Igli',
            lastName: 'Maksuti',
            email: 'igli@test.com',
            password: 'test',
            role: Role.MEMBER,
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
      localStorage.setItem('dummyDataLoaded', '1');
    }
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
