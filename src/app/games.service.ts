import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  headers = new HttpHeaders({ h1: 'v1', h2: 'v2' });
  constructor(private http: HttpClient) {}
  getAllItems(): Observable<any> {
    return this.http.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?rapidapi-key=b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68`
    );
  }
  options = {
    headers: {
      'X-RapidAPI-Key': 'bed1feb770msh51358826c2c33e8p1f3f45jsn6ffa58bb701b',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    },
  };
  getItems(mediaType: string): Observable<any> {
    return this.http.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?${mediaType}`,
      this.options
    );
  }
  getdetails(id: number): Observable<any> {
    return this.http.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      {
        headers: {
          'X-RapidAPI-Key':
            'bed1feb770msh51358826c2c33e8p1f3f45jsn6ffa58bb701b',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        },
      }
    );
  }
}
