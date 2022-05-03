import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greetingsPipe'
})
export class GreetingsPipePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    return `Today's date is: ${value}`;
  }

}
