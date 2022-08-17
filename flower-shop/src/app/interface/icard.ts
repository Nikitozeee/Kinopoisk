export interface ICard {
  id: number;
  name: string;
  price: number;
  img: string;
  typepage: TypePage;
}
export enum TypePage {
  rose = 1,
  all = 2,
  bouquet = 3,
  basket = 4,
  composition = 5
}
//1 роза
//2 все
//3 букет
//4 корзина
//5 композиция
 