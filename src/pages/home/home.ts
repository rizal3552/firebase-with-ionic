import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  //untuk buka halaman profile
  goToProfile(): void{
      this.navCtrl.push('ProfilePage');
  }

}
