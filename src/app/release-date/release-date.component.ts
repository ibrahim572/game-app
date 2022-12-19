import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
@Component({
  selector: 'app-release-date',
  templateUrl: './release-date.component.html',
  styleUrls: ['./release-date.component.scss'],
})
export class ReleaseDateComponent implements OnInit {
  count: number = 1;
  releseList: any[] = [];
  constructor(private _GamesService: GamesService) {}
  getrelaseItems() {
    this._GamesService.getItems('sort-by=release-date').subscribe((data) => {
      this.releseList = data;
    });
  }

  ngOnInit(): void {
    this.getrelaseItems();
  }
}
