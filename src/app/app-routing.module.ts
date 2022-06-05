import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksBoardComponent } from './tasks/tasks-board/tasks-board.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProjectUpsertComponent } from './pages/projects/project-upsert/project-upsert.component';
import { ProjectIndexComponent } from './pages/projects/project-index/project-index.component';
import { TaskCreateComponent as TaskCreateComponent } from './pages/tasks/tasks-create/tasks-create.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'projects/new', component: ProjectUpsertComponent},
  { path: 'projects/:projectId', component: ProjectIndexComponent},
  { path: 'tasks/:taskId', component: TaskCreateComponent },
  { path: 'task-board', component: TasksBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
