import { Component, OnInit } from '@angular/core';

export interface UpcomingMovies {
    "results": 
        {
            adult: boolean,
            backdrop_path: string,
            genre_ids:number [],
            id: number,
            original_language: string,
            original_title: string,
            overview: string,
            popularity: number,
            poster_path: string,
            release_date: number,
            title: string,
            video: Boolean,
            vote_average: number,
            vote_count: number
        }[];
}

import {MoivesListService} from '../moives-list.service'

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})

export class UpcomingComponent implements OnInit {

  constructor(private movieService:MoivesListService) { }

upComingM:UpcomingMovies |undefined;

  ngOnInit(): void {
  this.movieService.getUpcoming().subscribe(data=>{
    this.upComingM=data;
  })

  }

}
