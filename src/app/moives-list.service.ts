import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieListName } from './home/home.component';
import {UpcomingMovies} from './upcoming/upcoming.component';
import {LatestMovies} from './latest/latest.component'
import { BehaviorSubject } from 'rxjs';
import{Subject} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MoivesListService {
  url =
    'https://api.themoviedb.org/3/movie/now_playing?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US&page=1';

    upComing_url='https://api.themoviedb.org/3/movie/upcoming?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US&page=1';

latest_url='https://api.themoviedb.org/3/movie/latest?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US'
  constructor(private http: HttpClient) {}

  getMovies(): Observable<MovieListName> {
    return this.http.get<MovieListName>(this.url);
  }

  getUpcoming():Observable<UpcomingMovies>{
    return this.http.get<UpcomingMovies>(this.upComing_url);
  }

  getLatest():Observable<LatestMovies>{
    return this.http.get<LatestMovies>(this.latest_url);
  }

  public movie = new BehaviorSubject<Array<MovieListName>>([])
  getMoviesId(id:number) {
    let item = this.movie.value;
    console.log()

    return this.http.get(`${this.url}/${id}`);


  }

  public single_movie = new Subject<any>();
  // subjectMessageKey$= this.single_movie.asObservable();

  sendKey(message:any){
    this.single_movie.next(message);
}
 

getMovie_OB(){
  return this.single_movie.asObservable();
}
}
