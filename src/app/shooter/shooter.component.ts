import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
@Component({
  selector: 'app-shooter',
  templateUrl: './shooter.component.html',
  styleUrls: ['./shooter.component.scss'],
})
export class ShooterComponent implements OnInit {
  count: number = 1;
  shoterList: any[] = [];
  constructor(private _GamesService: GamesService) {}
  getshotertems() {
    this._GamesService.getItems('category=shooter').subscribe((data) => {
      this.shoterList = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getshotertems();
  }
}
