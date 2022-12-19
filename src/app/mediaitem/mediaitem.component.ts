import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
@Component({
  selector: 'app-mediaitem',
  templateUrl: './mediaitem.component.html',
  styleUrls: ['./mediaitem.component.scss'],
})
export class MediaitemComponent implements OnInit {
  count: number = 1;
  pcList: any[] = [];
  constructor(private _GamesService: GamesService) {}
  getpcItems() {
    this._GamesService.getItems('platform=pc').subscribe((data) => {
      this.pcList = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getpcItems();
  }
}
