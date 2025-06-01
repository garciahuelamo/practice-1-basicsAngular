import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddElementComponent } from "../components/add-element/add-element.component";
import { CounterElementComponent } from "../components/counter-element/counter-element.component";
import { FormdataElementComponent } from "../components/formdata-element/formdata-element.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddElementComponent, CounterElementComponent, FormdataElementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'module-1';
}
