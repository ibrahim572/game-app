import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
@Component({
  selector: 'app-battle-royale',
  templateUrl: './battle-royale.component.html',
  styleUrls: ['./battle-royale.component.scss'],
})
export class BattleRoyaleComponent implements OnInit {
  count: number = 1;
  battleList: any[] = [];
  constructor(private _GamesService: GamesService) {}
  getbattletems() {
    this._GamesService.getItems('category=battle-royale').subscribe((data) => {
      this.battleList = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getbattletems();
  }
}
