import { Component, Input, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/interface/iphoto';

@Component({
  selector: 'app-zoom-photo',
  templateUrl: './zoom-photo.component.html',
  styleUrls: ['./zoom-photo.component.scss'],
})
export class ZoomPhotoComponent implements OnInit {
  @Input() id: number = 0;
  @Input() list: IPhoto[] = [];
  constructor() {}

  ngOnInit(): void {}

  focusImage(id: number) {
    return this.list.find((x) => x.id === id)?.url;
  }

  nextPage(value: string) {
    switch (value) {
      case 'plus': {
        const index = this.list.findIndex((y: IPhoto) => y.id === this.id);
        if (index !== -1 && index + 1 < this.list.length) {
          this.id = this.list[index + 1].id;
        } else this.id = this.list[0].id;
        break;
      }
      case 'minus': {
        const index = this.list.findIndex((y: IPhoto) => y.id === this.id);
        if (index !== -1 && index <= this.list.length - 1 && index !== 0) {
          this.id = this.list[index - 1].id;
        } else this.id = this.list[this.list.length - 1].id;
        break;
      }
      default: {
        break;
      }
    }
  }
}
