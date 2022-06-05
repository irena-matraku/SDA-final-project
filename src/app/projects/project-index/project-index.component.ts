import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-created-project',
  templateUrl: './project-index.component.html',
  styleUrls: ['./project-index.component.scss']
})
export class ProjectIndexComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
  }


	panelOpenState = false;
  
  team_members = new FormControl('');

  team_members_List: string[] = ['Irena Matraku', 'Paula Xhindoli', 'Klaudio Bendaj', 'Igli Maksuti', 'Marjo Ceca'];


  
}
