import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { MovieListComponent } from "./movie-list/movie-List.component";
import { GameListComponent } from "./game-list/game-list.component"
import {TopBarComponent} from "./top-bar/top-bar.component";
import { FilterPipe } from './pipes/filter.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ShowListComponent } from './show-list/show-list.component';
import { MediaDetailsComponent } from './media-details/media-details.component';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'movie', component: MovieListComponent },
      {path: 'game', component: GameListComponent},
      {path: 'show', component: ShowListComponent},
      { path: 'media/:mediaType/:mediaId', component: MediaDetailsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
