import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orgsByInitiative'
})
export class OrgsByInitiativePipe implements PipeTransform {
  public transform(values: any[], filter: string): any[] {
    function findInitiative(initiative) {
      console.log('PAIR', filter);
      console.log('PAIR', initiative.value);
      return initiative.value == filter;
    }

    if (!values || !values.length) {
      return [];
    }

    if (!filter) {
      return values;
    }

    return values.filter(v => v.initiatives.find(findInitiative));
  }
}
