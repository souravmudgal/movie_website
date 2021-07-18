import { Component, OnInit } from '@angular/core';
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
  constructor(private moiveService: MoivesListService) {}
  movies_name: MovieListName | undefined;

  ngOnInit(): void {
    this.moiveService.getMovies().subscribe((result) => {
      this.movies_name = result;
      console.log(this.movies_name.results[0].poster_path);
    });
  }
}
