import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRadioGroup, IonRadio, IonLabel, IonItem, IonText } from '@ionic/angular/standalone';
import { MyData } from '../services/my-data';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRadioGroup, IonRadio,IonLabel, IonItem, IonText]
})
export class SettingsPage implements OnInit {

  unit:string = "metric";

  constructor(private s: MyData) { }

  ngOnInit() {
  }

  onUnitChange() {
    this.s.set("unit", this.unit); //Debug
    console.log('Selected unit:', this.unit);
}


}
