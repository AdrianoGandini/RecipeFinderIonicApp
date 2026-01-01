import { HttpOptions } from '@capacitor/core';
import { Injectable } from '@angular/core';
import { MyHttp } from './my-http';

@Injectable({
  providedIn: 'root',
})
export class MyRecipe {

  private apiKey = '70759a4f7911402abcc53d3c51d3b759';

  constructor(private mhs:MyHttp){}

  async searchByIngredients(ingredients: string) {
    const options: HttpOptions = {
      url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=${this.apiKey}&includeIngredients=${ingredients}`
    };
    return await this.mhs.get(options);
  }

  async getRecipeDetails(id: string) {
    const options: HttpOptions = {
      url: `https://api.spoonacular.com/recipes/${id}/information?apiKey=${this.apiKey}`
    };
    return await this.mhs.get(options);
  }

}
