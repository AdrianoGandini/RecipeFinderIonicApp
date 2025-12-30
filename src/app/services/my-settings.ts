import { Injectable } from '@angular/core';
import { MyData } from '../services/my-data';

@Injectable({
  providedIn: 'root',
})
export class MySettings {

  private DEFAULT_UNIT:string = "metric";

  constructor(private s:MyData){
    this.initDefaults();
  }

  private async initDefaults(){
    const unit = await this.s.get("unit");
    if (!unit){
      this.s.set("unit", this.DEFAULT_UNIT);
      console.log("Default unit: " + this.DEFAULT_UNIT);
    }
  }

  setUnit(unit:string){
    this.s.set("unit", unit);
  }

  getUnit(){
    return this.s.get("unit");
  }

}
