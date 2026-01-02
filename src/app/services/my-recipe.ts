import { HttpOptions } from '@capacitor/core';
import { Injectable } from '@angular/core';
import { MyHttp } from './my-http';
import { MySettings } from './my-settings';

@Injectable({
  providedIn: 'root',
})
export class MyRecipe {

  private apiKey = '70759a4f7911402abcc53d3c51d3b759';

  constructor(private mhs:MyHttp, private settings:MySettings){}

  async searchByIngredients(ingredients: string) {
    const options: HttpOptions = {
      url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=${this.apiKey}&includeIngredients=${ingredients}`
    };
    const response = await this.mhs.get(options);

    return response.data.results.map((item:any) => ({
      id:item.id,
      title:item.title,
      image:item.image
    }));
  }

  async getRecipeDetails(id: string) {
    const options: HttpOptions = {
      url: `https://api.spoonacular.com/recipes/${id}/information?apiKey=${this.apiKey}`
    };
    const response =  await this.mhs.get(options);
    const data = response.data;

    //Get the user metric preference
    const unit = await this.settings.getUnit();

    return {
      id: data.id,
      image: data.image,
      title: data.title,
      ingredients: this.mapIngredients(data.extendedIngredients, unit),
      steps: this.mapSteps(data.analyzedInstructions)
    }
  }

  private mapIngredients(ingredients:any, unit:string){
    return ingredients.map((ingredient:any) => ({
      name: ingredient.name,
      image: ingredient.image,
      amount: ingredient.measures[unit].amount,
      unitShort: ingredient.measures[unit].unitShort,
      unit: ingredient.measures[unit].unitLong
    }));
  }

  private mapSteps(analyzedInstructions: any[]){
    return analyzedInstructions[0].steps.map((s:any) => ({
      number: s.number,
      step: s.step
    }));
  }
}
