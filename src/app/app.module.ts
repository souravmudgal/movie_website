import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import{MoivesListService} from './moives-list.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {HttpClientModule} from '@angular/common/http';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { LatestComponent } from './latest/latest.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailsComponent,
    UpcomingComponent,
    LatestComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MoivesListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
