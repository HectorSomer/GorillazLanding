import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() character = {
    name: "",
    ruta: "",
    edad: 0, 
    ocupation: ""
 };
}
