import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent implements OnInit {
  count: number = 1;
  socialList: any[] = [];
  constructor(private _GamesService: GamesService) {}
  getsocialtems() {
    this._GamesService.getItems('category=social').subscribe((data) => {
      this.socialList = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getsocialtems();
  }
}
