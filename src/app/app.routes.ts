import { Routes } from '@angular/router';
import { CharactersComponent } from '../components/characters/characters.component';
import { AlbumsComponent } from '../components/albums/albums.component';

export const routes: Routes = [
    {path: "", component: CharactersComponent},
    {path:"albums", component: AlbumsComponent}
];
