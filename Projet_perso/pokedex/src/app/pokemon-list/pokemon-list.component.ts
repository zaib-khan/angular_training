import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonTab:Array<any> = [];
  page:number = 1;
  totalPokemons:number | undefined;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons(){
    this.dataService.getPokemon(10,this.page>1?(this.page-1).toString()+0:'0').subscribe((response:any)=>{
      this.totalPokemons = response.count;
      response.results.forEach((result: { name: string; }) => {
        this.dataService.getMoreDateOfPokemon(result.name).subscribe((uniqueResponse:any)=>{
          this.pokemonTab.push(uniqueResponse);
        })
      });
      
    });
  }

}
