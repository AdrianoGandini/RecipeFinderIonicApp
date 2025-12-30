import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRadioGroup, IonRadio, IonLabel, IonItem, IonText, IonButton} from '@ionic/angular/standalone';
import { MyData } from '../services/my-data';
import { RouterModule } from '@angular/router';
import { MySettings } from '../services/my-settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRadioGroup, IonRadio, IonLabel, IonItem, IonText, RouterModule]
})
export class SettingsPage implements OnInit {

  newMeasureUnit:string = "";

  constructor(private settings:MySettings) { }

  ngOnInit() {
  }

  onUnitChange() {
    this.settings.setUnit(this.newMeasureUnit);
    console.log('Selected unit:', this.newMeasureUnit);
}


}
