import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { MyFavorites } from '../services/my-favorites';
import { MyData } from '../services/my-data';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle]
})
export class FavoritesPage implements OnInit {

  favorites:any = [];

  constructor(private fav:MyFavorites) { }

  ngOnInit() {
    this.getFavorites();
  }

  async getFavorites(){
    this. favorites = await this.fav.getFavorites();
    console.log(this.favorites);
  }

}
