import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-created-project',
  templateUrl: './created-project.component.html',
  styleUrls: ['./created-project.component.scss']
})
export class CreatedProjectComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
  }


	panelOpenState = false;
  
  team_members = new FormControl('');

  team_members_List: string[] = ['Irena Matraku', 'Paula Xhindoli', 'Klaudio Bendaj', 'Igli Maksuti', 'Marjo Ceca'];


  
}
