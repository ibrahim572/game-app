import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit {
  count: number = 1;
  actionList: any[] = [];
  constructor(private _GamesService: GamesService) {}
  getactiontems() {
    this._GamesService.getItems('category=action').subscribe((data) => {
      this.actionList = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getactiontems();
  }
}
