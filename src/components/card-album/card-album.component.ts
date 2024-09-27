import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-card-album',
  standalone: true,
  imports: [],
  templateUrl: './card-album.component.html',
  styleUrl: './card-album.component.css'
})
export class CardAlbumComponent {
  @Input() album = {
    name: "",
    ruta: "",
    description:"",
    canciones:"", 
    style: "",
    conteiner:""
 };
}
