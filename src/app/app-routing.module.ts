import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { LatestComponent } from './latest/latest.component';
import {MovieDetailsComponent } from './movie-details/movie-details.component'
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
{path:"",component:LoginComponent},
{path:"home",component:HomeComponent, canActivate:[AuthGuard]},
{path:"upComing",component:UpcomingComponent},
{path:"latest",component:LatestComponent},
{path:"movieDetails/:id",component:MovieDetailsComponent},
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
