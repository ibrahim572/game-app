import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  gameid: any = null;
  constructor(
    private _GamesService: GamesService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const { id } = this._ActivatedRoute.snapshot.params;
    this._GamesService.getdetails(id).subscribe({
      next: (data) => {
        this.gameid = data;
      },
    });
  }
}
