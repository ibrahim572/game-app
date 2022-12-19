import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-popularity',
  templateUrl: './popularity.component.html',
  styleUrls: ['./popularity.component.scss'],
})
export class PopularityComponent implements OnInit {
  count: number = 1;
  popList: any[] = [];
  constructor(private _GamesService: GamesService) {}
  getpopItems() {
    this._GamesService.getItems('sort-by=popularity').subscribe((data) => {
      this.popList = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getpopItems();
  }
}
