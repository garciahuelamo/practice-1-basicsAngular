import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'add-element',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-element.component.html',
  styleUrl: './add-element.component.scss'
})
export class AddElementComponent {
  title: string;
  list: string[];
  newItem: string;

  constructor() {
    this.title = "Elementos added";
    this.list = [];
    this.newItem = '';
  }

  addFunction() {
    if (this.newItem.trim()) { //comprueba que después de quitar los espacios en blanco, no está vacío - evita " "
      this.list.push(this.newItem.trim());
      this.newItem = '';
    }
  }

  removeFunction(index: number) {
    this.list.splice(index, 1);
  }
}
