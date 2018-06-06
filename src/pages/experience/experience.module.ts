import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExperiencePage } from './experience';

import { AppHeaderComponentModule } from '../../components/app-header/app-header.module';

@NgModule({
  declarations: [ExperiencePage],
  imports: [IonicPageModule.forChild(ExperiencePage),
    AppHeaderComponentModule
  ],
})
export class ExperiencePageModule {}
