import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { TrackComponent } from './track/track.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { InfoService }  from './info.service';
import { UserComponent } from './user.component';
import { LoginComponent } from './login.component';
import { SpotifyAuthModule } from 'spotify-auth';
import { SpotifyAuthInterceptor2 } from './spotify-auth.interceptor';
import { Routes, RouterModule, Router } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  SpotifyAuthModule.authRoutes()[0]
];


@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    ArtistComponent,
    TrackComponent,
    AboutComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SpotifyAuthModule.forRoot(),
    RouterModule.forRoot(routes, {
      // useHash: true
    }),
  ],
providers: [
    InfoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpotifyAuthInterceptor2, //Force interception.
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
