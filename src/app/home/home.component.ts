import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/service/auth.service';
export interface MovieListName {
  results: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
  total_pages: number;
  total_results: number;
}

import { MoivesListService } from '../moives-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private moiveService: MoivesListService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}
  movies_name: MovieListName | undefined;

  movies: any = [];
  ngOnInit(): void {
    this.moiveService.getMovies().subscribe((result) => {
      // this.movies_name = result;
      console.log(result);
      this.movies = result.results;
      // console.log(this.movies_name.results.poster_path);
    });
  }
  onMovie(film: any) {
    this.moiveService.sendKey(film);
  }

  Logout(event: any) {
    this.authService.logout().then((value) => {
      this.router.navigate(['/login']);
    });
  }
}
