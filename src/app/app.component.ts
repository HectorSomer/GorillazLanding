import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { CharactersComponent } from '../components/characters/characters.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AlbumsComponent } from '../components/albums/albums.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CharactersComponent, FooterComponent, RouterLink, AlbumsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landing_page_programacion_web';

}
