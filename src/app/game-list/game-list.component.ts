import { Component } from '@angular/core';

import { Media, games } from '../media';
import { CommonService } from '../services/common-service';
import { FilterPipe } from "../pipes/filter.pipe";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  providers: [FilterPipe]
})

export class GameListComponent {
  games : Media[] = games;
  searchInput : string = '';
  private subscriptionGame: Subscription;

  constructor(private Service: CommonService, private pipe : FilterPipe) {
    this.subscriptionGame = this.Service.getUpdate().subscribe(message => { //message contains the data sent from service
      this.searchInput = message.text;
      if(this.searchInput != '')
      this.games = this.pipe.transform(games, this.searchInput);
      else
        this.games = games;
    });
  }

  ngOnInit(){

  }
}
