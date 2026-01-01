import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonButtons, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { heart, settingsOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { MyData } from '../services/my-data';
import { MyRecipe } from '../services/my-recipe';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, CommonModule, FormsModule, IonButtons, IonIcon, RouterLink, IonCard, IonCardHeader, IonCardTitle, IonCardContent],
})
export class HomePage {

  apiKey:string = "70759a4f7911402abcc53d3c51d3b759";
  recipeKeywords:string = "";
  results:any = [];
  errorMessage:string = "";

  constructor(private s:MyData, private recipe:MyRecipe) {
    addIcons({ heart, settingsOutline });
  }

  ionViewWillEnter(){}

  private async recepieSearch(){

    this.results = (await this.recipe.searchByIngredients(this.recipeKeywords)).data.results;
  }

  search(){
    //console.log("button working, the recipeKeywords are: " + this.recipeKeywords)

    if (!this.recipeKeywords.trim()){
      this.errorMessage = "Plase enter at least on ingredient.";
      return;
    }
    this.errorMessage = '';
    this.recepieSearch();
  }

  detailSelected(recipe:any){
    //console.log(JSON.stringify(recipe.id));
    this.s.set("id", recipe.id);
  }

}
