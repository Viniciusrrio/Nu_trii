import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  private apiKey = '43acfd0abc2b65ae1cffaac6fec762e2'; // Substitua pela sua chave de API
  private appId = 'd69368ad'; // Substitua pelo seu APP ID
  private baseUrl = 'https://trackapi.nutritionix.com/v2/natural/nutrients';

  constructor() {}

  async searchFood(foodName: string) {
    const url = `${this.baseUrl}/search/${query}?appId=${this.appId}&appKey=${this.apiKey}`;
    try {
      const response = await axios.post(url);
      return response.data; // Retorna os dados da API
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      throw error; // Lança o erro para ser tratado mais tarde
    }
  }
}
