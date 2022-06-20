import { Component, OnInit } from '@angular/core';

import { shows } from '../media';
import { CommonService } from '../services/common-service';
import { FilterPipe } from "../pipes/filter.pipe";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css'],
  providers: [FilterPipe]
})
export class ShowListComponent implements OnInit {
shows = shows;
searchInput : string = '';
private subscriptionShow: Subscription;

  constructor(private Service: CommonService, private pipe : FilterPipe) {
    this.subscriptionShow = this.Service.getUpdate().subscribe(message => { //message contains the data sent from service
      this.searchInput = message.text;
      if(this.searchInput != '')
        this.shows = this.pipe.transform(shows, this.searchInput);
      else
        this.shows = shows;
    });
  }

  ngOnInit(): void {
  }

}
