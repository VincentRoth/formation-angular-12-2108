import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumberFormat',
})
export class PhoneNumberFormatPipe implements PipeTransform {
  transform(phoneNumber: string, newChar = ' '): string | undefined {
    return phoneNumber?.replace(/\./g, newChar);
  }
}
