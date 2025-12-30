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

  ngOnInit() {
  }

}
