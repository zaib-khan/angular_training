import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieNameMakerPipe'
})
export class MovieNameMakerPipePipe implements PipeTransform {

  tabDeter:Array<string>=["le","la","les","des","ce","cet","cette","ces","chaque","quelques","plusieurs","quelque","l'","mon","ton","notre","votre","leur","ma","ta","sa","de"];

  transform(value: string):string|null {

    if(!value) return null;

    let word = value.split(" ");
    return word.map((word,index) =>{
      if(index > 0 && this.isPreposition(word)){
        word = word.toLowerCase();
      }else{
        word = this.toTitleCase(word);
      }
      return word;
    }).join(" ")
  }


  isPreposition(word:string):Boolean{
    return this.tabDeter.includes(word.toLowerCase());
  }
  toTitleCase(word:string){
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
  }
}
