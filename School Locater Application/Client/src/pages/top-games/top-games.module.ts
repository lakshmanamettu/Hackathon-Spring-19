import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopGamesPage } from './top-games';

@NgModule({
  declarations: [
    TopGamesPage,
  ],
  imports: [
    IonicPageModule.forChild(TopGamesPage),
  ],
})
export class TopGamesPageModule {}
