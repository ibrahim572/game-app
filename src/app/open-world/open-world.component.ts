import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
@Component({
  selector: 'app-open-world',
  templateUrl: './open-world.component.html',
  styleUrls: ['./open-world.component.scss'],
})
export class OpenWorldComponent implements OnInit {
  count: number = 1;
  worldList: any[] = [];
  constructor(private _GamesService: GamesService) {}
  getworldtems() {
    this._GamesService.getItems('category=open-world').subscribe((data) => {
      this.worldList = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getworldtems();
  }
}
