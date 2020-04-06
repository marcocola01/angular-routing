
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQD8wiPUoeXr24mTlPgtnNRQ5w1ZXc5XknZ2tOdbcPZFgOItGA_VF48ttH0MGuG5wGPGq-iHGaL5NGB3Yw4nRIRdBGJieshEiO0sMbX0XawNEF99vlk-0i6oVC3BgdXS1oLfSxOYBA7Pm46v'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}

