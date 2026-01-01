import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MySettings } from '../services/my-settings';
import { MyData } from '../services/my-data';
import { MyRecipe } from '../services/my-recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RecipeDetailsPage implements OnInit {

  constructor(private settings:MySettings, private s:MyData, private r:MyRecipe) { }

  recipeId:string= "";
  unit:string= "";
  recipe:any = [];

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
      //console.log("Recipe Id " + this.recipeId)

      this.recipe = (await this.r.getRecipeDetails(this.recipeId)).data;
      console.log(this.recipe); //Debug
    }

}
