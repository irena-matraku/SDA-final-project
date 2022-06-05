
import { Injectable } from '@angular/core';
import { Status } from '../models/enum/status';
import { ProjectKey } from '../models/interfaces/project';


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
        description:
          'bla bla bla bla bla bla bla',
        categories: 'Design',
        status: 'To be done'
      },
      {
        id: 2,
        title: 'Second bla bla bla',
        description: 'Revogar credenciais para equipe de infra',
        categories: 'Development',
        status: Status.IN_PROGRESS,
      },

    ];
    
    localStorage.setItem(ProjectKey, JSON.stringify(projects));

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

  private set(items: any): void {
    localStorage.setItem(this.key, JSON.stringify(items));
  }
}
