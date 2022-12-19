import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  count: number = 1;
  homeList: any[] = [];
  constructor(private _GamesService: GamesService) {}
  gethomeItems() {
    this._GamesService.getItems('sort-by=popularity').subscribe((hdata) => {
      this.homeList = hdata;
      console.log(hdata);
    });
  }

  ngOnInit(): void {
    this.gethomeItems();
  }
}
