import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TopListComponent } from './top-list/top-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'top-list', component: TopListComponent },
  { path: 'card', component: CardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'reviews', component: ReviewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
