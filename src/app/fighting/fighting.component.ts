import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
@Component({
  selector: 'app-fighting',
  templateUrl: './fighting.component.html',
  styleUrls: ['./fighting.component.scss'],
})
export class FightingComponent implements OnInit {
  count: number = 1;
  fligtList: any[] = [];
  constructor(private _GamesService: GamesService) {}
  getflighttems() {
    this._GamesService.getItems('category=flight').subscribe((data) => {
      this.fligtList = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getflighttems();
  }
}
