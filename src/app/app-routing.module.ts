import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksBoardComponent } from './pages/tasks/tasks-board/tasks-board.component';
import { ProjectUpsertComponent } from './pages/projects/project-upsert/project-upsert.component';
import { ProjectIndexComponent } from './pages/projects/project-index/project-index.component';
import { TasksCreateComponent } from './pages/tasks/tasks-create/tasks-create.component';
import { TasksIndexComponent } from './pages/tasks/tasks-index/tasks-index.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

const routes: Routes = [
  { path: '', component: ProjectIndexComponent},
  { path: 'projects/new', component: ProjectUpsertComponent},
  { path: 'projects/:projectId', component: ProjectIndexComponent},
  { path: 'tasks/:taskId', component: TasksCreateComponent },
  { path: 'tasks', component: TasksIndexComponent },
  { path: 'task-board', component: TasksBoardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
