import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MoivesListService {

  constructor() { }

  movies_service=[

    {
     id:1, 
     movie_title:"avenger",
     img:"../../assets/avenger.png",
     button:"More Details"
   },
   {
     id:2, 
     movie_title:"avenger2",
     img:"../../assets/avenger.png",
     button:"More Details"
   },
   {
     id:3, 
     movie_title:"avenger3",
     img:"../../assets/avenger.png",
     button:"More Details"
   }
   ];
 
getMovies(){
  return this.movies_service;
}

getMoviesId(id:any){
  return this.movies_service.find(value=>{
    return value.id===id;
  });
}

}
