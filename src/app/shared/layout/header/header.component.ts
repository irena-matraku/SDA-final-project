import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'task-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  viewMode: string = 'table';

  @Output() modeChanged: EventEmitter<string> = new EventEmitter();

  toppings = new FormControl('');

  toppingList: string[] = ['Klaudio Bendaj', 'Igli Maksuti', 'Irena Matraku', 'Paola Xhindoli', 'Marjo Ceca'];

  setViewMode(mode: string){
    this.viewMode = mode;
  }
}
