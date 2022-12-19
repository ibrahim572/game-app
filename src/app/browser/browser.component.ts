import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss'],
})
export class BrowserComponent implements OnInit {
  count: number = 1;
  browserList: any[] = [];
  constructor(private _GamesService: GamesService) {}
  getbrowserItems() {
    this._GamesService.getItems('platform=browser').subscribe((data) => {
      this.browserList = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getbrowserItems();
  }
}
