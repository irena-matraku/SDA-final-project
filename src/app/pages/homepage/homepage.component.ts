import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/models/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  projectService: ProjectService;
  projects:any;//: Projects;

  constructor(projectService: ProjectService) { 
    this.projectService = projectService;
  }

  ngOnInit(): void {
    this.projects = this.projectService.all();
  }

}
