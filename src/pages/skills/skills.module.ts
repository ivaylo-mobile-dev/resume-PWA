import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkillsPage } from './skills';

import { AppHeaderComponentModule } from '../../components/app-header/app-header.module';

@NgModule({
  declarations: [SkillsPage],
  imports: [IonicPageModule.forChild(SkillsPage),
    AppHeaderComponentModule
  ],
})
export class SkillsPageModule {}
