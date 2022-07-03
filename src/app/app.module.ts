import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MovieListComponent } from "./movie-list/movie-List.component";
import { GameListComponent } from "./game-list/game-list.component"
import {TopBarComponent} from "./top-bar/top-bar.component";
import { FilterPipe } from './pipes/filter.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ShowListComponent } from './show-list/show-list.component';
import { MediaDetailsComponent } from './media-details/media-details.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    GameListComponent,
    TopBarComponent,
    FilterPipe,
    HighlightDirective,
    ShowListComponent,
    MediaDetailsComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent, data: {animation: 'HomePage'} },
      { path: 'movie', component: MovieListComponent, data: { animation: 'MoviePage' } },
      { path: 'game', component: GameListComponent, data: { animation: 'GamePage' } },
      { path: 'show', component: ShowListComponent, data: { animation: 'ShowPage' } },
      { path: 'media/:mediaType/:mediaId', component: MediaDetailsComponent, data: { animation: 'DetailsPage' } }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
