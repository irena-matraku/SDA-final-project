import { Category } from 'src/app/pages/projects/project-upsert/project-upsert.component';
import { Status } from '../enum/status';
import { Tasks } from './task';

export interface Project {
  id?: number;
  title: string;
  description: string;
  categories: Category;
  status: Status;
  tasks: Tasks

}

export type Projects = Array<Project>;

export const ProjectKey = 'projects';
