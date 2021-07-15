import { Component, OnInit } from '@angular/core';
export interface movie_list_name{
  movie_title:string,
  img:string,
  button:string
}
import {MoivesListService} from '../moives-list.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private moiveService:MoivesListService) { }
  movies_name:any=[];
 
  ngOnInit(): void {
this.movies_name= this.moiveService.getMovies();




  }

}
