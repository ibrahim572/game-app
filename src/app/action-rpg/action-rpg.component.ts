import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
@Component({
  selector: 'app-action-rpg',
  templateUrl: './action-rpg.component.html',
  styleUrls: ['./action-rpg.component.scss'],
})
export class ActionRpgComponent implements OnInit {
  count: number = 1;
  rpgList: any[] = [];
  constructor(private _GamesService: GamesService) {}
  getrpgtems() {
    this._GamesService.getItems('category=action-rpg').subscribe((data) => {
      this.rpgList = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getrpgtems();
  }
}
