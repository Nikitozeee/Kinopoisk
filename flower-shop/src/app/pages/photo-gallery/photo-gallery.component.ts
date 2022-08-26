import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IPhoto } from 'src/app/interface/iphoto';
import { ZoomPhotoComponent } from 'src/app/modal/zoom-photo/zoom-photo.component';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})
export class PhotoGalleryComponent implements OnInit {
  list: IPhoto[] = [
    { id: 1, url: 'https://html5css.ru/css/img_lights.jpg' },
    { id: 2, url: 'https://i.stack.imgur.com/QqRWG.jpg' },
    { id: 3, url: 'https://static8.depositphotos.com/1020618/933/i/950/depositphotos_9332752-stock-photo-fire-alphabet-letter-s.jpg' },
  ];

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openModalZoomPhoto(id: number) {
    const modal = this.modalService.open(ZoomPhotoComponent);
    modal.componentInstance.id = id;
    modal.componentInstance.list = this.list;
  }
}
