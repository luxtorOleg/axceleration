import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  photos: string[] = [];
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    this.photos[0] = "asd";
    this.photos[1] = "asd1";
    this.photos[2] = "asd2";
  }
}
