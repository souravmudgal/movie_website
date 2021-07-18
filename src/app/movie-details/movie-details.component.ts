import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoivesListService} from '../moives-list.service';
import { MovieListName } from '../home/home.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor( private router:ActivatedRoute, private moiveService:MoivesListService) { }

  movieDetails : any | undefined;

  id:any;
  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
this.id=this.router.snapshot.params['id'];
    this.getOne();

  }

  getOne(){
    this.moiveService.getMoviesId(this.id).subscribe(result=>{
      this.movieDetails= result;
      console.log(result);
    })
  }

}
