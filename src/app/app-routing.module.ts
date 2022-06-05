import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProjectUpsertComponent } from './pages/projects/project-upsert/project-upsert.component';
import { ProjectIndexComponent } from './pages/projects/project-index/project-index.component';
import { TaskCreateComponent as TaskCreateComponent } from './pages/tasks/tasks-create/tasks-create.component';

const routes: Routes = [
  { path: '', component: ProjectIndexComponent},
  { path: 'projects/new', component: ProjectUpsertComponent},
  { path: 'projects/:projectId', component: ProjectIndexComponent},
  { path: 'tasks/:taskId', component: TaskCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
