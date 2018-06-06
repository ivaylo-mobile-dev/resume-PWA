import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

import { AppHeaderComponentModule } from '../../components/app-header/app-header.module';

@NgModule({
  declarations: [HomePage],
  imports: [
    IonicPageModule.forChild(HomePage),
    AppHeaderComponentModule
  ],
})
export class HomePageModule {}
