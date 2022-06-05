import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateNewProjectComponent } from './projects/create-new-project/create-new-project.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Materials Components
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule, } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {CreatedProjectComponent } from './projects/created-project/created-project.component';
import { FooterComponent } from './core/footer/footer.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatSelectModule} from '@angular/material/select';
import { EditPageComponent } from './tasks/edit-page/edit-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HeaderComponent } from './tasks/header/header.component';



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
    CreateNewProjectComponent,
    CreatedProjectComponent,
    FooterComponent,
    EditPageComponent,
    TaskListComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

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
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
