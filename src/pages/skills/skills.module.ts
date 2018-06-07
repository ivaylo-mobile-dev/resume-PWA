import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkillsPage } from './skills';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [SkillsPage],
  imports: [IonicPageModule.forChild(SkillsPage),
    ComponentsModule
  ],
})
export class SkillsPageModule {}
