import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MoivesListService {

  url=" https://api.themoviedb.org/3/movie/upcoming?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US&page=1/results";
  constructor(private http:HttpClient) { }


 
getMovies(){
return this.http.get(this.url);;

}

getMoviesId(id:any){
  return this.http.get(`${this.url}/${id}`);
}

}
