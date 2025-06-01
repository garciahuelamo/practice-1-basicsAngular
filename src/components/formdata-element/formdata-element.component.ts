import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormGroup, ReactiveFormsModule, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-formdata-element',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formdata-element.component.html',
  styleUrl: './formdata-element.component.scss'
})
export class FormdataElementComponent {

  title:string;
  dataUser: FormGroup;
  userList: any[];

  constructor(private fb: FormBuilder) {
    this.title = 'Formdata Component'
    this.userList = []
    this.dataUser = this.fb.group({
      name: [''],
      surname: [''],
      phoneNumber: [''],
      birthday: ['']
    });
  }

  onSubmit() {
    if (this.dataUser.valid) {
      this.userList.push(this.dataUser.value); 
      this.dataUser.reset(); 
    }
  }
}
