import { Component } from '@angular/core';
import { IonicPage} from "ionic-angular";

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot       = 'HomePage';
  educationRoot  = 'EducationPage';
  experienceRoot = 'ExperiencePage';
  skillsRoot     = 'SkillsPage';
  contactRoot    = 'ContactPage';

  constructor() {

  }
}
