import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
@Component({
  selector: 'app-racing',
  templateUrl: './racing.component.html',
  styleUrls: ['./racing.component.scss'],
})
export class RacingComponent implements OnInit {
  count: number = 1;
  raceList: any[] = [];
  constructor(private _GamesService: GamesService) {}
  getracetems() {
    this._GamesService.getItems('category=racing').subscribe((data) => {
      this.raceList = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getracetems();
  }
}
