import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NutritionService } from '../services/nutrition.service'; // ajuste o caminho se necessário

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page {
  query: string = '';
  foodData: any;

  constructor(
    private navCtrl: NavController,
    private nutritionService: NutritionService
  ) {}

  register() {
    this.navCtrl.navigateForward('/tabs/tab1'); // Retorna para o Login (Tab1)
  }

  async searchFood() {
    try {

      console.log('teste');
      
      const result = await this.nutritionService.searchFood(this.query);

      console.log('teste');

      this.foodData = result?.foods[0]; // Considera apenas o primeiro item do array
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }
}
