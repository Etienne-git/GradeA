import { Component} from '@angular/core';
import { Subscription } from 'rxjs';

import { Media, movies } from '../media';
import { CommonService } from '../services/common-service';
import { FilterPipe } from "../pipes/filter.pipe";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [FilterPipe],
  animations: []
})

export class MovieListComponent {
  movies : Media[] = movies;
  searchInput : string = '';
  private subscriptionMovie: Subscription;
  show : boolean = true;

  constructor(private Service: CommonService, private pipe : FilterPipe) {

    this.subscriptionMovie = this.Service.getUpdate().subscribe(message => { //message contains the data sent from service
      this.searchInput = message.text;
      if(this.searchInput != '')
      this.movies = this.pipe.transform(movies, this.searchInput);
      else
        this.movies = movies;
    });
  }

  ngOnInit(){

  }
}
