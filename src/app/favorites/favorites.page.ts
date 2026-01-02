import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonButton } from '@ionic/angular/standalone';
import { MyFavorites } from '../services/my-favorites';
import { MyData } from '../services/my-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, RouterLink , IonButton]
})
export class FavoritesPage implements OnInit {

  favorites:any = [];

  constructor(private fav:MyFavorites, private s:MyData) { }

  ngOnInit() {
    this.getFavorites();
  }

  async getFavorites(){
    this. favorites = await this.fav.getFavorites();
    console.log(this.favorites);
  }

  detailSelected(recipe:any){
    //console.log(JSON.stringify(recipe.id)); //Debug
    this.s.set("id", recipe.id);
  }

}
