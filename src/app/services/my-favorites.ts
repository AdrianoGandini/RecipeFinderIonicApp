import { Injectable } from '@angular/core';
import { MyData } from './my-data';

@Injectable({
  providedIn: 'root',
})
export class MyFavorites {

  constructor(private s:MyData){}

  async getFavorites(){
    return await this.s.get("favorites") || [];
  }

  async isFavorite(id:string){
    const favorites = await this.getFavorites();
    return favorites.some((recipe: any) => recipe.id === id); //Some return a bollean
  }

  async addFavorite(recipe:any){
    const favorites = await this.getFavorites();
    const exist = favorites.some((fav:any) => fav.id === recipe.id);

    if (!exist){
      favorites.push(this.getFavoriteDetails(recipe));
      await this.s.set("favorites", favorites);
    }
  }

  private getFavoriteDetails(recipe:any) {
      return {
        id: recipe.id,
        image: recipe.image,
        title: recipe.title,
      }
    }

async removeFavorite(id: string) {
  let favorites = await this.getFavorites();

  favorites = favorites.filter((f:any) => f.id !== id);
  await this.s.set('favorites', favorites);
}
}
