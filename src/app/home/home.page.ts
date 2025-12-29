import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { heart, settingsOutline } from 'ionicons/icons';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, CommonModule, FormsModule, IonButtons, IonIcon],
})
export class HomePage {

  constructor() {
    addIcons({ heart, settingsOutline });
  }

}
