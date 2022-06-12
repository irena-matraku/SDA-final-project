import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Status, StatusColors } from 'src/app/models/enum/status';
import { ProjectService } from 'src/app/services/project.service';
@Component({
  selector: 'app-created-project',
  templateUrl: './project-index.component.html',
  styleUrls: ['./project-index.component.scss']
})
export class ProjectIndexComponent implements OnInit {



  projectService: ProjectService;
  projects:any;//: Projects;

  constructor(projectService: ProjectService) { 
    this.projectService = projectService;
  }

  ngOnInit(): void {
    this.projects = this.projectService.all().map((p: any) => {
      type ObjectColorKey = keyof typeof StatusColors;
      let statusKey = Object.keys(Status)[Object.values(Status).indexOf(p.status)];

      p.statusColor = StatusColors[statusKey as ObjectColorKey];

      return p;

    });
  }


	panelOpenState = false;
  
  team_members = new FormControl('');

  team_members_List: string[] = ['Irena Matraku', 'Paula Xhindoli', 'Klaudio Bendaj', 'Igli Maksuti', 'Marjo Ceca'];


  
}
