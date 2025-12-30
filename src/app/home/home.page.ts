import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonButtons, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { heart, settingsOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { MySettings } from '../services/my-settings';
import { MyHttp } from '../services/my-http';
import { HttpOptions } from '@capacitor/core';
import { MyData } from '../services/my-data';


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

  constructor(private s:MyData, private mhs: MyHttp) {
    addIcons({ heart, settingsOutline });
  }

  ionViewWillEnter(){}

  private async recepieSearch(){
    const option: HttpOptions = {
     url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=${this.apiKey}&includeIngredients=${this.recipeKeywords}`
    }
    const response = await this.mhs.get(option);
    this.results = response.data.results;
    console.log(JSON.stringify(this.results)); //Debug
  }

  search(){
    console.log("button working, the recipeKeywords are: " + this.recipeKeywords)

    if (!this.recipeKeywords.trim()){
      this.errorMessage = "Plase enter at least on ingredient.";
      return;
    }
    this.errorMessage = '';
    this.recepieSearch();
  }

  detailSelected(recipe:any){
    console.log(JSON.stringify(recipe.id));
    this.s.set("id", recipe.id);
  }

}
