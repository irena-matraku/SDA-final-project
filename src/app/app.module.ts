import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProjectUpsertComponent } from './pages/projects/project-upsert/project-upsert.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskCreateComponent } from './pages/tasks/tasks-create/tasks-create.component';



// Materials Components
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule, } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { ProjectIndexComponent } from './pages/projects/project-index/project-index.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule} from '@angular/forms';
import { TaskEditComponent } from './pages/tasks/tasks-edit/tasks-edit.component';
import { TasksIndexComponent } from './pages/tasks/tasks-index/tasks-index.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { ProjectCardComponent } from './shared/cards/project-card/project-card.component';
import { TaskCardComponent } from './shared/cards/task-card/task-card.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';


let projects = localStorage.getItem('projects');
if(projects == null) {
  const dummyProjects = [
      {
          project_id: 1,
          project_name: 'Hello World' 
      },
      {
          project_id: 1,
          project_name: 'Hello Moon' 
      }
  ];

  localStorage.setItem('projects', JSON.stringify(dummyProjects));
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ProjectIndexComponent,
    ProjectUpsertComponent,
    TaskCreateComponent,
    TasksIndexComponent,
    TaskEditComponent,
    HeaderComponent,
    ProjectCardComponent,
    TaskCardComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,

    // Materials Modules
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatExpansionModule,
    CdkAccordionModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
