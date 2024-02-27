import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'word2Color' })
export class word2ColorPipe implements PipeTransform {
  transform(word: string): string {
    const colorMap: { [key: string]: string } = {
      red: '#FF0000',
      green: '#00FF00',
      blue: '#0000FF',
      black: '#000000',
      brown: '#A52A2A',
      yellow: '#FFFF00',
    };

    return colorMap[word.toLowerCase()] || word;
  }
}
