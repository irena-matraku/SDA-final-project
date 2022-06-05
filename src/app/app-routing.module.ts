import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateNewProjectComponent } from './projects/create-new-project/create-new-project.component';
import { CreatedProjectComponent } from './projects/created-project/created-project.component';
import { EditPageComponent as EditTaskPage } from './tasks/edit-page/edit-page.component';
import { TasksBoardComponent } from './tasks/tasks-board/tasks-board.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'projects/new', component: CreateNewProjectComponent},
  { path: 'projects/:projectId', component: CreatedProjectComponent},
  { path: 'tasks/:taskId', component: EditTaskPage },
  {path: 'task-board', component:TasksBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
