import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MoivesListService {

  url=" http://localhost:3000/movie_li";
  constructor(private http:HttpClient) { }


 
getMovies(){
return this.http.get(this.url);;
}

getMoviesId(id:any){
  return this.http.get(`${this.url}/${id}`);
}

}
