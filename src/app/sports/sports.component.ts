import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss'],
})
export class SportsComponent implements OnInit {
  count: number = 1;
  sportList: any[] = [];
  constructor(private _GamesService: GamesService) {}
  getsporttems() {
    this._GamesService.getItems('category=sports').subscribe((data) => {
      this.sportList = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getsporttems();
  }
}
