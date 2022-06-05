import { Category } from 'src/app/pages/projects/project-upsert/project-upsert.component';
import { Status } from '../enum/status';
import { Members } from './member';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: Status;
  member: Members;
  categories: Category;
  date: Date;

}

export type Tasks = Array<Task>;