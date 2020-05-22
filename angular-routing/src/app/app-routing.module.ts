import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { TrackComponent } from './track/track.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UsersAlbumsComponent } from './users-albums/users-albums.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'search', component: SearchComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' },
  { path: 'albums/:id', component: AlbumComponent },
  { path: 'artists/:id', component: ArtistComponent },
 { path: 'user/:id', component: UserComponent },
  { path: 'users-albums/:id', component: UsersAlbumsComponent },
  { path: 'login', component : LoginComponent},
  { path: 'authorized', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
