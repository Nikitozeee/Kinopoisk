import { Component, OnInit } from '@angular/core';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { NgModule } from '@angular/core';

const mapConfig: YaConfig = {
  apikey: 'API_KEY',
  lang: 'en_US',
};

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [AngularYandexMapsModule.forRoot(mapConfig)],
})
export class AppModule {}
