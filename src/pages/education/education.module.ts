import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EducationPage } from './education';

import { AppHeaderComponentModule } from '../../components/app-header/app-header.module';

@NgModule({
  declarations: [EducationPage],
  imports: [IonicPageModule.forChild(EducationPage),
    AppHeaderComponentModule
  ],
})
export class EducationPageModule {}
