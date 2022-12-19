import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-fantasy',
  templateUrl: './fantasy.component.html',
  styleUrls: ['./fantasy.component.scss'],
})
export class FantasyComponent implements OnInit {
  count: number = 1;
  fantList: any[] = [];
  constructor(private _GamesService: GamesService) {}
  getfantazytems() {
    this._GamesService.getItems('category=fantasy').subscribe((data) => {
      this.fantList = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getfantazytems();
  }
}
