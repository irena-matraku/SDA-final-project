import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormControl } from '@angular/forms';


export interface Category {
  name: string;
}


@Component({
  selector: 'app-create-new-project',
  templateUrl: './create-new-project.component.html',
  styleUrls: ['./create-new-project.component.scss']
   
})
export class CreateNewProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  team_members = new FormControl('');

  team_members_List: string[] = ['Irena Matraku', 'Paula Xhindoli', 'Klaudi Bendaj', 'Igli Maksuti', 'Marjo Ceca'];
  
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

