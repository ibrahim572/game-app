import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
@Component({
  selector: 'app-relevance',
  templateUrl: './relevance.component.html',
  styleUrls: ['./relevance.component.scss'],
})
export class RelevanceComponent implements OnInit {
  count: number = 1;
  relList: any[] = [];
  constructor(private _GamesService: GamesService) {}
  getrelevaneItems() {
    this._GamesService.getItems('sort-by=relevance').subscribe((data) => {
      this.relList = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getrelevaneItems();
  }
}
