import { Component } from '@angular/core';
import { Router, ResolveEnd} from '@angular/router';


import { Media, movies, games, shows } from '../media';
import { CommonService } from '../services/common-service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  animations: []
})

export class TopBarComponent {
  media : Media[] = [];
  searchInput: string = '';


  constructor(private router: Router, private Service: CommonService) {
    this.router.events.subscribe((routerData) => {
      if(routerData instanceof ResolveEnd){
        this.media = [];
        if(routerData.url === '/movie')
          this.media = movies;
        else if(routerData.url === '/game')
          this.media = games;
        else if(routerData.url === '/show')
          this.media = shows;
      }
    })
  }

  ngOnInit(){
  }

  callSearchRequest(): void {
    let input: string = (document.getElementById('search_input') as HTMLInputElement).value
    this.Service.sendUpdate(input);
  }


  previewClick(clickedName: string) {
    (document.getElementById('search_input') as HTMLInputElement).value = clickedName;
  }


}
