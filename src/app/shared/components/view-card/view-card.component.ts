import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface ICard {
  id: number;
  title: string;
  description: string;
  urlImagem: string;
}

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.scss'],
})
export class ViewCardComponent implements OnInit {

  @Input('card') card: ICard | null = null;
  @Input('navigate') navigateUrl: string = '';
  @Input('rotation') rotation: string = "portrait";
  constructor(private router: Router) { }

  public ngOnInit(): void {
  }

  public cardClicked(): void {
    if (!this.navigateUrl) {
      return;
    }
    this.router.navigate([`${this.navigateUrl}/${this.card?.id}`])
  }

}
