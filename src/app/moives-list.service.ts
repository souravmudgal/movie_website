import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieListName } from './home/home.component';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class MoivesListService {
  url =
    'https://api.themoviedb.org/3/movie/now_playing?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US&page=2';
  constructor(private http: HttpClient) {}

  getMovies(page: number): Observable<MovieListName> {
    // return this.http.get<MovieListName>(this.url);
    return this.http.get<MovieListName>(environment.movie_db_base_url, {
      params: { api_key: environment.api_key, language: 'en-US', page },
    });
  }

  getMoviesId(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }
}
