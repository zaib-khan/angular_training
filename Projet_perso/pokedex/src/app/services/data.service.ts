import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http:HttpClient
  ) { }

    //get pokemons 

    getPokemon(limit:number,offset:string){
      let temp = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
      console.log(temp);
      
      return this.http.get(temp);
    }

    getMoreDateOfPokemon(pokemonName:string){
      return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    }




}
