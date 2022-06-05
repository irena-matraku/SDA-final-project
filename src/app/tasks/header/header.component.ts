import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  toppings = new FormControl('');

  toppingList: string[] = ['Klaudio Bendaj', 'Igli Maksuti', 'Irena Matraku', 'Paola Xhindoli', 'Marjo Ceca'];

}
