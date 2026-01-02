import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { MyFavorites } from '../services/my-favorites';
import { MyData } from '../services/my-data';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { heart, settingsOutline, home } from 'ionicons/icons';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, RouterLink, IonButton, IonButtons, IonIcon]
})
export class FavoritesPage implements OnInit {

  favorites:any = [];

  constructor(private fav:MyFavorites, private s:MyData) {
    addIcons({ heart, settingsOutline, home });
  }

  ngOnInit() {}

  ionViewWillEnter(){
    this.getFavoritesRecipes();
  }

  async getFavoritesRecipes(){
    this. favorites = await this.fav.getFavorites();
    console.log(this.favorites);
  }

  //Change the storage id to be loaded on Recipe Details page
  detailSelected(recipe:any){
    this.s.set("id", recipe.id);
  }

  async remove(recipe:any){
    await this.fav.removeFavorite(recipe.id);
    await this,this.getFavoritesRecipes();
  }

}
