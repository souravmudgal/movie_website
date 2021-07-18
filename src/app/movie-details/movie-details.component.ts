import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoivesListService } from '../moives-list.service';

export interface MoveDetailsResponse {
  adult: false;
  backdrop_path: '/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg';
  belongs_to_collection: null;
  budget: 200000000;
  genres: [
    {
      id: 28;
      name: 'Action';
    },
    {
      id: 12;
      name: 'Adventure';
    },
    {
      id: 53;
      name: 'Thriller';
    },
    {
      id: 878;
      name: 'Science Fiction';
    }
  ];
  homepage: 'https://www.marvel.com/movies/black-widow';
  id: 497698;
  imdb_id: 'tt3480822';
  original_language: 'en';
  original_title: 'Black Widow';
  overview: 'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.';
  popularity: 10297.406;
  poster_path: '/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg';
  production_companies: [
    {
      id: 420;
      logo_path: '/hUzeosd33nzE5MCNsZxCGEKTXaQ.png';
      name: 'Marvel Studios';
      origin_country: 'US';
    }
  ];
  production_countries: [
    {
      iso_3166_1: 'US';
      name: 'United States of America';
    }
  ];
  release_date: '2021-07-07';
  revenue: 224800430;
  runtime: 134;
  spoken_languages: [
    {
      english_name: 'English';
      iso_639_1: 'en';
      name: 'English';
    },
    {
      english_name: 'Russian';
      iso_639_1: 'ru';
      name: 'Pусский';
    }
  ];
  status: 'Released';
  tagline: "She's Done Running From Her Past.";
  title: 'Black Widow';
  video: false;
  vote_average: 8.1;
  vote_count: 2602;
}

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieId: string = '';
  constructor(
    private router: ActivatedRoute,
    private moiveService: MoivesListService
  ) {}

  movieDetails: MoveDetailsResponse | undefined;

  ngOnInit(): void {
    this.router.params.subscribe((data) => {
      this.movieId = data['id'];

      this.moiveService
        .getMovie_OB(this.movieId)
        .subscribe((response: MoveDetailsResponse) => {
          this.movieDetails = response;
        });
    });
  }
}