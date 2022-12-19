import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
@Component({
  selector: 'app-alphabetical',
  templateUrl: './alphabetical.component.html',
  styleUrls: ['./alphabetical.component.scss'],
})
export class AlphabeticalComponent implements OnInit {
  count: number = 1;
  alphList: any[] = [];
  constructor(private _GamesService: GamesService) {}
  getalphaItems() {
    this._GamesService.getItems('sort-by=alphabetical').subscribe((data) => {
      this.alphList = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getalphaItems();
  }
}
