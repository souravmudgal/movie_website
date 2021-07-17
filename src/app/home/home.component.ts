import { Component, OnInit } from '@angular/core';

import { MoivesListService } from '../moives-list.service';

export interface MovieListName {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
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

// interface something {
//   video: [
//     { name: 'rishabh' },
//     { name: 'rishabh' },
//     { name: 'rishabh' },
//     { name: 'rishabh' }
//   ];
// }

// interface something2 {
//   video: { name: 'rishabh' }[];
// }
