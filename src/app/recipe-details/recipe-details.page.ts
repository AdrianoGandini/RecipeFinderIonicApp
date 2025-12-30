import { HttpOptions } from '@capacitor/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MySettings } from '../services/my-settings';
import { MyData } from '../services/my-data';
import { MyHttp } from '../services/my-http';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RecipeDetailsPage implements OnInit {

  constructor(private settings:MySettings, private s:MyData, private mhs:MyHttp) { }

  recipeId:string= "715957";
  unit:string= "";
  recipe:any = [];
  apiKey:string = "70759a4f7911402abcc53d3c51d3b759";

  ngOnInit() {
    this.inicializeVariables();

  }

  private async setUpRecipeId(){
    this.recipeId = await this.s.get("id");
  }

  private async setUpMetricUnit(){
    this.unit = await this.settings.getUnit();
  }

  private async inicializeVariables(){
    await this.setUpRecipeId();
    await this.setUpMetricUnit();
    await this.recepieIdSearch();
  }

  private async recepieIdSearch(){
      console.log("Recipe Id " + this.recipeId)
      const option: HttpOptions = {
       url: `https://api.spoonacular.com/recipes/${this.recipeId}/information?apiKey=${this.apiKey}`
      }
      const response = await this.mhs.get(option);
      this.recipe = response.data;
      //console.log(this.recipe); //Debug
    }

}
