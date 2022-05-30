import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
// import { NavbarComponent } from './core/navbar/navbar.component';
import { CreateNewProjectComponent } from './create-new-project/create-new-project.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  // { path: 'navbar', component: NavbarComponent},
  { path: 'newproject', component: CreateNewProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
