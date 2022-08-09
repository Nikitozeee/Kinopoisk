import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopListComponent } from './top-list/top-list.component';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about/about.component';
import { ReviewsComponent } from './reviews/reviews.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopListComponent,
    CardComponent,
    AboutComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
