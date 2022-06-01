import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateNewProjectComponent } from './create-new-project/create-new-project.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Materials Components
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { CreatedProjectComponent } from './created-project/created-project.component';
import { FooterComponent } from './core/footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    CreateNewProjectComponent,
    CreatedProjectComponent,
    FooterComponent,


    
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
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
