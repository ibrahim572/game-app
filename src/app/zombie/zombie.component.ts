import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
@Component({
  selector: 'app-zombie',
  templateUrl: './zombie.component.html',
  styleUrls: ['./zombie.component.scss'],
})
export class ZombieComponent implements OnInit {
  count: number = 1;
  zomList: any[] = [];
  constructor(private _GamesService: GamesService) {}
  getzombietems() {
    this._GamesService.getItems('category=zombie').subscribe((data) => {
      this.zomList = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getzombietems();
  }
}
