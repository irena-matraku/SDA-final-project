import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl } from '@angular/forms';
import { Users } from 'src/app/models/interfaces/user';
import { Status } from 'src/app/models/enum/status';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';
import { Project } from 'src/app/models/interfaces/project';


export interface Category {
  name: string;
}


@Component({
  selector: 'app-upsert',
  templateUrl: './project-upsert.component.html',
  styleUrls: ['./project-upsert.component.scss']
   
})
export class ProjectUpsertComponent implements OnInit {
  projectId: string | null = null;
  users: Users = [];
  
  name: string = '';
  description: string = '';
  userId: string = '';
  categoryName: string = '';
  status: Status = Status.TO_BE_DONE;
  project: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.users = this.userService.all();

    this.route.params.subscribe((params) => {
      this.projectId = params['projectId'];
      if (this.projectId && this.projectId !== 'new') {
        this.project = this.projectService.get(Number(this.projectId));

        if (this.project) {
          this.name = this.project.title;
          this.description = this.project.description;
          this.userId = String(this.project.member.id);
          this.categoryName = this.project.categories.name;
          this.status = this.project.status;
        }
      }
    });
  }

  handleSave() {
    const selectedUser = this.users.find((u) => u.id === Number(this.userId));
    if(!selectedUser) return;

    const newProject: Project = {      
      id: Math.max(...this.  projectService.all().map((t: any) => t.id))+1, // random ID
      title: this.name,
      description: this.description,
      members: [selectedUser],
      categories: { name: this.categoryName },
      status: this.status,
      // tasks: []
    };

    if(this.project) {
      this.projectService.update(this.project.id, { ...newProject, id: this.project.id});
    } else {
      this.projectService.create(newProject)
    }

    this.router.navigateByUrl('/projects')
  }

  team_members = new FormControl('');

  team_members_List: string[] = ['Irena Matraku', 'Paula Xhindoli', 'Klaudio Bendaj', 'Igli Maksuti', 'Marjo Ceca'];
  
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  category:  Category[] = [{name: 'Design'}, {name: 'Developement'}, {name: 'DevOPS'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our category
    if (value) {
      this.category.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(category: Category): void {
    const index = this.category.indexOf(category);

    if (index >= 0) {
      this.category.splice(index, 1);
    }
  }

}

