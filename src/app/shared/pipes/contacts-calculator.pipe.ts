import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'util';

@Pipe({
	name: 'contactsCalculator'
})
export class ContactsCalculatorPipe implements PipeTransform {
	transform(value: string[] | string): number {
		if (!Array.isArray(value)) {
			value = value = value.split(',');
		}
		return value.length;
	}
}
