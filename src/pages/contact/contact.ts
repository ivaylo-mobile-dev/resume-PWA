import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  openUrl(){
    window.open('https://www.youtube.com/embed/kEU9q1LOcI0', '_system');
  }

  openLinkedInUrl(){
    window.open('https://www.linkedin.com/in/slavovivaylo/', '_system');
  }

  openGitHubUrl(){
    window.open('https://github.com/ivaylo-mobile-dev', '_system');
  }


}
