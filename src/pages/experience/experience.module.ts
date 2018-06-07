import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExperiencePage } from './experience';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [ExperiencePage],
  imports: [
    IonicPageModule.forChild(ExperiencePage),
    ComponentsModule
  ],
})
export class ExperiencePageModule {}
