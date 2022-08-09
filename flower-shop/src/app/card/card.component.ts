import { Component, OnInit } from '@angular/core';
import { ICard } from '../interface/icard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cards: ICard[] = [
    {id: 1, name: "Цветок", price: 1.4, img: "https://flor2u.ru/images/uploads/conversion/c82/c8264adb42a3503394e4c38349088d34/c8264adb42a3503394e4c38349088d34-flor.detail.gallery.jpg"},
    {id: 2, name: "Цветок", price: 1.4, img: "https://flowers-sib.ru/upload/resize_cache/iblock/cf1/510_510_0/cf1212558fc615a8d9b5829ac391b1ff.jpg"},
    {id: 4, name: "Цветок", price: 1.4, img: "https://flowersgallery.salon/wp-content/plugins/kama-thumbnail_ed/thumb/a15ad73ea_450x450.png"},
    {id: 5, name: "Цветок", price: 1.4, img: "https://orenburg.media/wp-content/uploads/2020/05/cb8bfd4a7acda41ad657fad5592a7165.jpg"},
    {id: 7, name: "Цветок", price: 1.4, img: "https://img.lelisflowers.ru/images/cms/thumbs/9799c8258567b66fc1873aa4697de592b97d61ed/akapulkomain_370_370_jpg_5_100.jpg"},
    {id: 7, name: "Цветок", price: 1.4, img: "https://img.lelisflowers.ru/images/cms/thumbs/9799c8258567b66fc1873aa4697de592b97d61ed/akapulkomain_370_370_jpg_5_100.jpg"},
    {id: 7, name: "Цветок", price: 1.4, img: "https://img.lelisflowers.ru/images/cms/thumbs/9799c8258567b66fc1873aa4697de592b97d61ed/akapulkomain_370_370_jpg_5_100.jpg"},
    {id: 7, name: "Цветок", price: 1.4, img: "https://img.lelisflowers.ru/images/cms/thumbs/9799c8258567b66fc1873aa4697de592b97d61ed/akapulkomain_370_370_jpg_5_100.jpg"},
    {id: 7, name: "Цветок", price: 1.4, img: "https://img.lelisflowers.ru/images/cms/thumbs/9799c8258567b66fc1873aa4697de592b97d61ed/akapulkomain_370_370_jpg_5_100.jpg"},
    {id: 7, name: "Цветок", price: 1.4, img: "https://img.lelisflowers.ru/images/cms/thumbs/9799c8258567b66fc1873aa4697de592b97d61ed/akapulkomain_370_370_jpg_5_100.jpg"},
    {id: 7, name: "Цветок", price: 1.4, img: "https://img.lelisflowers.ru/images/cms/thumbs/9799c8258567b66fc1873aa4697de592b97d61ed/akapulkomain_370_370_jpg_5_100.jpg"},
    {id: 7, name: "Цветок", price: 1.4, img: "https://img.lelisflowers.ru/images/cms/thumbs/9799c8258567b66fc1873aa4697de592b97d61ed/akapulkomain_370_370_jpg_5_100.jpg"},
    {id: 7, name: "Цветок", price: 1.4, img: "https://img.lelisflowers.ru/images/cms/thumbs/9799c8258567b66fc1873aa4697de592b97d61ed/akapulkomain_370_370_jpg_5_100.jpg"},
    {id: 7, name: "Цветок", price: 1.4, img: "https://img.lelisflowers.ru/images/cms/thumbs/9799c8258567b66fc1873aa4697de592b97d61ed/akapulkomain_370_370_jpg_5_100.jpg"},
    {id: 7, name: "Цветок", price: 1.4, img: "https://img.lelisflowers.ru/images/cms/thumbs/9799c8258567b66fc1873aa4697de592b97d61ed/akapulkomain_370_370_jpg_5_100.jpg"},
    {id: 8, name: "Цветок", price: 1.4, img: "https://img.lelisflowers.ru/images/cms/thumbs/9799c8258567b66fc1873aa4697de592b97d61ed/tereza_370_370_jpg_5_100.jpg"}]

  constructor() { }

  ngOnInit(): void {
  }

}