import { Component, OnInit } from '@angular/core';
export interface  LatestMovies {
  results:{
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: string,
    budget: number,
    genres:number [],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: string[],
    production_countries: string[],
    release_date:string ,
    revenue: number,
    runtime: number,
    spoken_languages: string[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}[]
};
import {MoivesListService} from '../moives-list.service'

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

  constructor(private MoivesListService:MoivesListService) { }

latest_movie :LatestMovies |undefined;

  ngOnInit(): void {

    this.MoivesListService.getLatest().subscribe(data=>{
      this.latest_movie=data;
    })
  }

}
