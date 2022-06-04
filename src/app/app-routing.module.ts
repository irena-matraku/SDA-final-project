import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateNewProjectComponent } from './create-new-project/create-new-project.component';
import { CreatedProjectComponent } from './created-project/created-project.component';
import { EditPageComponent as EditTaskPage } from './tasks/edit-page/edit-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'projects/new', component: CreateNewProjectComponent},
  { path: 'projects/:projectId', component: CreatedProjectComponent},
  { path: 'tasks/:taskId', component: EditTaskPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
