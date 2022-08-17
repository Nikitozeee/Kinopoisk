import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICard, TypePage } from '../interface/icard';
import { FilterService } from '../service/filter.service';

@Component({
  selector: 'app-card-catalog',
  templateUrl: './card-catalog.component.html',
  styleUrls: ['./card-catalog.component.scss'],
})
export class CardCatalogComponent implements OnInit {
  cards: ICard[] = [];

  constructor(public filter: FilterService, private route: ActivatedRoute) {
    const typePagePath = this.route.snapshot.routeConfig?.path;
    this.cards = this.filter.filterCard(this.getKeyByValue(typePagePath));
  }

  ngOnInit(): void {}

  getKeyByValue(val?: string): TypePage {
    var s = TypePage.rose;
    (Object.keys(TypePage) as Array<keyof typeof TypePage>).map((key) => {
      if (key === val) {
        s = TypePage[key];
        return;
      }
    });

    return s;
  }
}
