import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICard, TypePage } from '../interface/icard';

const cards: ICard[] = [
  {
    id: 1,
    name: 'Корзина',
    price: 560,
    img: 'https://flor2u.ru/images/uploads/conversion/c82/c8264adb42a3503394e4c38349088d34/c8264adb42a3503394e4c38349088d34-flor.detail.gallery.jpg',
    typepage: TypePage.basket,
  },
  {
    id: 2,
    name: 'Букет',
    price: 140,
    img: 'https://flor2u.ru/images/uploads/conversion/c82/c8264adb42a3503394e4c38349088d34/c8264adb42a3503394e4c38349088d34-flor.detail.gallery.jpg',
    typepage: TypePage.bouquet,
  },
  {
    id: 3,
    name: 'Композиция',
    price: 1000,
    img: 'https://flor2u.ru/images/uploads/conversion/c82/c8264adb42a3503394e4c38349088d34/c8264adb42a3503394e4c38349088d34-flor.detail.gallery.jpg',
    typepage: TypePage.composition,
  },
  {
    id: 4,
    name: 'Роза',
    price: 120,
    img: 'https://flor2u.ru/images/uploads/conversion/c82/c8264adb42a3503394e4c38349088d34/c8264adb42a3503394e4c38349088d34-flor.detail.gallery.jpg',
    typepage: TypePage.rose,
  },
  {
    id: 5,
    name: 'Роза',
    price: 90,
    img: 'https://flor2u.ru/images/uploads/conversion/c82/c8264adb42a3503394e4c38349088d34/c8264adb42a3503394e4c38349088d34-flor.detail.gallery.jpg',
    typepage: TypePage.rose,
  },
];

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor() {}
  filterCard(typePage?: TypePage): ICard[] {
    if (typePage !== TypePage.all)
      return cards.filter((card) => card.typepage === typePage);
    else return cards;
  }
}
