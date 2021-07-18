import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { LatestComponent } from './latest/latest.component';
import {MovieDetailsComponent } from './movie-details/movie-details.component'


const routes: Routes = [
{path:"",component:HomeComponent},
{path:"home",component:HomeComponent},
{path:"upComing",component:UpcomingComponent},
{path:"latest",component:LatestComponent},
{path:"movieDetails/:id",component:MovieDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
