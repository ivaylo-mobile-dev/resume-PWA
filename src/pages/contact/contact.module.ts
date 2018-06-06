import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';

import { AppHeaderComponentModule } from '../../components/app-header/app-header.module';

@NgModule({
  declarations: [ContactPage],
  imports: [
    IonicPageModule.forChild(ContactPage),
    AppHeaderComponentModule
  ],
})
export class ContactPageModule {}
