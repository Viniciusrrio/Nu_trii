import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {
  constructor(private navCtrl: NavController) {}

  login() {
    this.navCtrl.navigateForward('/tabs/tab3'); // Navegar para Receitas (Tab3)
  }

  goToRegister() {
    this.navCtrl.navigateForward('/tabs/tab2'); // Navegar para Cadastro (Tab2)
  }
}
