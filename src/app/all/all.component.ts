import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  count: number = 1;
  gamesList: any[] = [];
  constructor(private _GamesService: GamesService) {}
  getAllgame() {
    this._GamesService.getAllItems().subscribe((response) => {
      this.gamesList = response;
    });
  }

  ngOnInit(): void {
    this.getAllgame();
  }
}
