import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { movies, games, shows} from '../media'
import { Grade, grades, plus } from '../grades'

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.css']
})
export class MediaDetailsComponent implements OnInit {

  media: any;
  grades : Grade[] = grades;
  plus : Grade = plus;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.initializeMedia();

  }

  private initializeMedia() {
    const routeParams = this.route.snapshot.paramMap;
    const mediaTypeFromRoute = String(routeParams.get('mediaType'));
    const mediaIdFromRoute = Number(routeParams.get('mediaId'));

    if (mediaTypeFromRoute === 'movie')
      this.media = movies.find(movie => movie.id === mediaIdFromRoute);
    else if (mediaTypeFromRoute === 'game')
      this.media = games.find(game => game.id === mediaIdFromRoute);
    else
      this.media = shows.find(show => show.id === mediaIdFromRoute);
  }

  public selectGrade(clickedGrade : Grade, plusClicked : boolean = false) {
    let currentGradeFill : string = (document.getElementById(clickedGrade.pathId) as HTMLImageElement).style.fill;
    let currentPlusFill : string = (document.getElementById(clickedGrade.grade + plus.pathId) as HTMLImageElement).style.fill;

    this.uncheckOtherGrades(clickedGrade);

    if(plusClicked && currentPlusFill != clickedGrade.fillPlus) { //color both grade and plus if plus is clicked and not colored so far
      (document.getElementById(clickedGrade.grade + plus.pathId) as HTMLImageElement).style.fill = clickedGrade.fillPlus;
      (document.getElementById(clickedGrade.pathId) as HTMLImageElement).style.fill = clickedGrade.fillPlus;
    }
    else if(!plusClicked && currentGradeFill != clickedGrade.fill && currentGradeFill != clickedGrade.fillPlus) //grade is clicked and not colored so far
      (document.getElementById(clickedGrade.pathId) as HTMLImageElement).style.fill = clickedGrade.fill;
    else if(!plusClicked) { //uncheck grade and plus if grade is clicked and not colored
        (document.getElementById(clickedGrade.pathId) as HTMLImageElement).style.fill = 'rgb(236, 246, 243)';
        (document.getElementById(clickedGrade.grade + plus.pathId) as HTMLImageElement).style.fill = 'rgb(236, 246, 243)';
      }
    else { //otherwise only uncheck plus and set grade to nonplus color
      (document.getElementById(clickedGrade.grade + plus.pathId) as HTMLImageElement).style.fill = 'rgb(236, 246, 243)';
      (document.getElementById(clickedGrade.pathId) as HTMLImageElement).style.fill = clickedGrade.fill;
      }
  }

  private uncheckOtherGrades(clickedGrade: Grade) {
    grades.forEach(grade => {
      if (grade.pathId != clickedGrade.pathId) {
        (document.getElementById(grade.pathId) as HTMLImageElement).style.fill = 'rgb(236, 246, 243)';
        (document.getElementById(grade.grade + plus.pathId) as HTMLImageElement).style.fill = 'rgb(236, 246, 243)';
      }
    })
  }
}
