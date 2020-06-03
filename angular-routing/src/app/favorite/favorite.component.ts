import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  obsTrack: Observable<any>;
  constructor(public spotify: SpotifyService) { }

  ngOnInit(): void {
    this.obsTrack = this.spotify.getFavorite();
    this.obsTrack.subscribe((data) => {console.log(data) });
  }
}
