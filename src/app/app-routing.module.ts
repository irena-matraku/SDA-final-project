import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
// import { NavbarComponent } from './core/navbar/navbar.component';
import { CreateNewProjectComponent } from './create-new-project/create-new-project.component';
import { EditPageComponent as EditTaskPage } from './tasks/edit-page/edit-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  // { path: 'navbar', component: NavbarComponent},
  { path: 'newproject', component: CreateNewProjectComponent },
  { path: 'tasks/:taskId', component: EditTaskPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
