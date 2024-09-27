import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
  charactersVirtual = [
    {
    name: "2-D",
    ruta: "./assets/2-D.png",
    edad: 46 ,
    ocupation: "Vocalista y pianista"
    },
    {
    name: "Russel Hobbs",
    ruta: "./assets/Russel.png", 
    edad: 49,
    ocupation: "Baterista"
    }, 
    {
    name: "Murdoc",
    ruta: "./assets/Murdoc.png",
    edad: 58,
    ocupation: "Bajista y lider de Gorillaz"
    },
    {
    name: "Noodle",
    ruta: "./assets/Noodle.png", 
    edad: 33, 
    ocupation: "Guitarrista principal y vocalista ocasional"
    }
  ]
  charactersExVirtual = [
    {
      name: "Paula Cracker",
      ruta: "./assets/PaulaCracker.png",
      edad: 38,
      ocupation: "Guitarrista"
    },
    {
      name: "Del Tha Ghost", 
      ruta: "./assets/DelThaGhost.png",
      edad: 52  , 
      ocupation: "Rapero"
    },
    {
      name: "Cyborg Noodle",
      ruta: "./assets/CyborgNoodle.png",
      edad: 1,
      ocupation: "Guitarrista y guarda espaldas de Murdoc"
    }
  ]
  charactersNoVirtual= [
    {
      name: "Damon Albarn", 
      ruta: "./assets/DamonAlbarn.png",
      edad: 56,
      ocupation: "Vocalista principal, instrumentista y compositor, además de ser el lider de Gorillaz"
    },
    {
     name: "Jamie Hewlett",
     ruta: "./assets/JamieHewlett.png",
     edad: 56,
     ocupation: "Diseñador de Gorillaz y cofundador"
    },
    {
      name: "Remi Kabaka Jr.", 
      ruta: "./assets/RemiKabakaJr.png",
      edad: 54,
      ocupation:"Dj y voz de Russel"
    }
  ]
}
