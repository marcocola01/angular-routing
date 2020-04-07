
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
        'Bearer BQBCeCuNBHFxQyu-uwPKIn_7ykr57h-0b-w7YUVtfxyklLRQymI1BSkyVPEstYb-ssXZ4vAFBwnJPqEyDGltkXRGP_mM1cdj2GBusa1882Uiv5pZKFzWKC03KhkIUxr5V_BRNtgaHqvtnmKY'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}

