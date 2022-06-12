import { Category } from 'src/app/pages/projects/project-upsert/project-upsert.component';
import { Status } from '../enum/status';
import { User } from './user';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: Status;
  member: User;
  category: Category;
  date: Date;
}

export type Tasks = Array<Task>;
export const TasksKey = 'tasks';
