import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonItem, IonBadge, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { MySettings } from '../services/my-settings';
import { MyData } from '../services/my-data';
import { MyRecipe } from '../services/my-recipe';
import { addIcons } from 'ionicons';
import { heart} from 'ionicons/icons';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonItem, IonBadge, IonLabel, IonButton, IonIcon]
})
export class RecipeDetailsPage{

  constructor(private settings:MySettings, private s:MyData, private r:MyRecipe) {
    addIcons({ heart});
  }

  // Base URL for ingredient images (API only returns filename)
  imgBase = 'https://spoonacular.com/cdn/ingredients_250x250/';

  recipeId:string= "";
  unit:string= "";
  recipe:any = [];

  ionViewWillEnter() {
    this.inicializeVariables();

  }

  private async setUpRecipeId(){
    this.recipeId = await this.s.get("id");
  }

  private async inicializeVariables(){
    await this.setUpRecipeId();
    await this.recepieIdSearch();
  }

  private async recepieIdSearch(){
      //console.log("Recipe Id " + this.recipeId) //Debug

      this.recipe = await this.r.getRecipeDetails(this.recipeId);
      console.log(this.recipe); //Debug
    }



}
