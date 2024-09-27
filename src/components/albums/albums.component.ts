
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAlbumComponent } from '../card-album/card-album.component';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, CardAlbumComponent],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  albums = [{
    name: "Gorillaz",
    ruta: "./assets/Gorillaz.png",
    description: "Gorillaz es el primer album de Gorillaz, salió el 26 de marzo de 2001, sus generos musicales son: Lo-fi, Art pop, Hip-hop, Trip-hop, Rock alternativo y Hip-hop alternativo.",
    canciones:"La lista canciones de este album ses: 1.-Re-Hash, 2.-5/4, 3.-Tomorrow Comes Today, 4.-New Genious (Brother),5.-Clint Eastwood (ft. Del the Funky Homosapien como Del), 6.-Man Research, 7.-Punk, 8.-Sound Check (Gravity), 9.-Double Bass, 10.-Rock the House (ft. Del the Funky Homosapien como Del), 12.- 19-2000, 13.-Latin Simone (¿Qué Pasa Contigo?) (ft. con Ibrahim Ferrer), 14.-Starshine, 15.-Slow Country, 16.-M1 A1 (esta es la mejor canción del álbum, en mi opinión).",
    style: "gorillaz",
    conteiner: "left_conteiner"
  },
{
  name: "Demon Days",
  ruta: "./assets/DemonDays.png",
  description: "Demon Days es el segundo álbum de Gorillaz, que contiene el éxito de Feel Good Inc., se lanzó el 11 de mayo de 2005, sus generos musicales es: Rock alternativo, Art pop y Hip-hop alternativo.",
  canciones:"La lista de canciones de Demon Days son: 1.-Intro, 2.-Last Living Souls, 3.-Kids with Guns (ft. Neneh Cherry), 4.-O Green World, 5.-Dirty Harry ft Bootie Brown & San Fernando Valley Youth Chorus (para mí, esta es la mejor canción del álbum), 6.-Feel Good Inc. (ft De La Soul), 7.-El Mañana, 8.-Every Planet We Reach Is Dead» (Con Ike Turner), 9.-November Has Come (ft. MF Doom), 10.-All Alone (ft. Roots Manuva & Martina Topley-Bird), 11.-White Light, (ft. Shaun Ryder y Rosie Wilson), 12.-Fire Coming Out of the Monkey's Head (ft.- Dennis Hopper), 13.-Don't Get Lost in Heave (ft.- The London Community Gospel Choir), 14.- Demon Days (ft.- The London Community Gospel Choir).",
  style: "demon_days",
  conteiner: "rigth_conteiner"
},
{
  name: "Plastic Beach",
  ruta: "./assets/PlasticBeach.png",
  description: "Plastic Beach es el tercer álbum de Gorillaz que contiene el éxito de On Melancholly Hill, este álbum fue lanzado el 3 de marzo del 2010, sus generos musicales son: 	Art pop y Electro-pop.",
  canciones:"La lista de canciones de este álbum es: 1.-Orchestral Intro, 2.-Welcome to the World of the Plastic Beach (ft Snoop Dogg & Hypnotic Brass Ensemble), 3.-White Flag (ft. Kano, Bashy & The Lebanese National Orchestra for Oriental Arabic Music), 4.-Rhinestone Eyes, 5.-Stylo (ft. Bobby Womack & Mos Def), 6.-Superfast Jellyfish (con Gruff Rhys y De La Soul), 7.-Empire Ants (ft. Little Dragon), 8.-Glitter Freeze» (ft. Mark E. Smith), 9.-Some Kind of Nature» (ft. Lou Reed), 10.-On Melancholy Hill, 11.-Broken (considero que esta es la mejor canción del álbum), 12.-Sweepstakes (ft. Mos Def y Hypnotic Brass Ensemble), 13.-Plastic Beach (ft. Mick Jones & Paul Simonon), 14.-To Binge (con Little Dragon), 15.-Cloud of Unknowing (ft. Bobby Womack & sinfonía ViVA), 16.-Pirate Jet.",
  style: "plastic_beach",
  conteiner: "left_conteiner"
}, 
{
  name: "Humanz",
  ruta: "./assets/Humanz.png",
  description: "Humanz es el quinto álbum de Gorillaz, que en lo que a mí respecta, es de hecho, el mejor álbum de Gorillaz, sus generos musicales son: Art pop y Electro-pop.",
  canciones:"La lista de canciones del álbum es: 1.-Intro: I Switched My Robot Off, 2.-Ascension ft. Vince Staples (la mejor canción del álbum para mí, sin dudas), 3.-Strobelite (ft. Peven Everett), 4.-Saturnz Barz (ft Popcaan), 5.-Momentz (ft. De La Soul), 6.-Interlude: The Non-Conformist Oath, 7.-Submission (ft. Danny Brown & Kelela), 8.-Charger (ft. Grace Jones), 9.-Interlude: Elevator Going Up, 10.-Andromeda (ft. D.R.A.M.), 11.-Busted and Blue, 12.-Interlude: Talk Radio, 13.-Carnival (ft. Anthony Hamilton), 14.-Let Me Out (ft. Mavis Staples & Pusha T), 15.-Interlude: Penthouse, 16.-Sex Murder Party (ft. Jamie Principle & Zebra Katz), 17.-She's My Collar (ft. Kali Uchis), 18.-Interlude: The Elephant, 19.-Hallelujah Money (ft. Benjamin Clementine), 20.-We Got The Power (ft. Jehnny Beth).",
  style: "humanz",
  conteiner: "rigth_conteiner"
},
{
  name: "The Now Now",
  ruta: "./assets/TheNowNow.png",
  description: "The Now Now es el sexto álbum de Gorillaz lanzado 29 de junio de 2018, sus generos musicales son; Funk, Synth Pop, New Wave, Soul.",
  canciones:"La lista de canciones de este álbum es: 1.-Humility (ft. George Benson), 2.-Tranz (la mejor canción del álbum según yo), 3.-Hollywood (ft. Snoop Dogg y Jamie Principle), 4.-Kansas, 5.-Sorcererz, 6.-Idaho, 7.-Lake Zurich, 8.-Magic City, 9.-Fire Flies, 10.-One Percent, 11.-Souk Eye.",
  style:"the_now_now",
  conteiner: "left_conteiner"
},
{
  name: "Song Machine",
  ruta: "./assets/SongMachine (2).png",
  description: "Song Machine es el septimo álbum de Gorillaz, fue lanzado el 23 de octubre del 2020, su género músical es: Hip Hop Alternativo.",
  canciones:"La lista de canciones de este álbum es: 1.-Strange Timez (ft. Robert Smith), 2.-The Valley of the Pagans (ft. Beck), 3.-The Lost Chord» (ft. Leee John), 4.-Pac-Man ft. Schoolboy Q (Esta es la mejor canción del álbum en mi opinión), 5.-Chalk Tablet Towers (ft. St. Vincent), 6.-The Pink Phantom (ft. Elton John & 6lack), 7.-Aries (ft. Peter Hook & Georgia), 8.-Friday 13th (ft. Octavian), 9.-Dead Butterflies (ft Kano & Roxani Arias), 10.-Desolé (ft. Fatoumata Diawara), 11.-Momentary Bliss (ft. slowthai & Slaves).",
  style: "song_machine",
  conteiner:"rigth_conteiner"
},
{
  name: "Cracker Island",
  ruta: "./assets/CrackerIsland.png",
  description: "Cracker Island es el octavo álbum de Gorillaz, fue lanzado el día 24 de febrero del 2023, es el ultimo álbum de Gorillaz hasta la actualidad, su genero musical es: Pop, Synth Pop, Dream Pop y Funk.",
  canciones:"Su lista de canciones es: 1.-Cracker Island (ft. Thundercat), 2.-Oil (ft. Stevie Nicks), 3.-The Tired Influencer, 4.-Silent Running (ft. Adeleye Omotayo), 5.-New Gold (ft. Tame Impala & Bootie Brown), 6.-Baby Queen, 7.-Tarantula (considero que es la mejor canción de este álbum), 8.-Tormenta (ft. Bad Bunny), 9.-Skinny Ape, 10.-Possession Island (ft. Beck).",
  style: "cracker_island",
  conteiner: "left_conteiner"
}]
}
