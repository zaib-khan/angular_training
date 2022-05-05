import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieNameMakerPipe'
})
export class MovieNameMakerPipePipe implements PipeTransform {

  tabDeter:Array<string>=["le","la","les","des","ce","cet","cette","ces","chaque","quelques","plusieurs","quelque","l'","mon","ton","notre","votre","leur","ma","ta","sa"];

  transform(value: string):string {
    let tempTab = value.split(" ");

    for(let i = 0, y = tempTab.length; i < y; i++){
      tempTab[0] = tempTab[0].toUpperCase();
    }

    




    return tempTab.join(' ');
  }

}
