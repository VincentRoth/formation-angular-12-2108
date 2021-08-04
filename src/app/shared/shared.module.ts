import { NgModule } from '@angular/core';
import { AnimalService } from './api/animal.service';
import { MailToDirective } from './mail-to.directive';
import { PhoneNumberFormatPipe } from './phone-number-format.pipe';

@NgModule({
  providers: [AnimalService],
  declarations: [MailToDirective, PhoneNumberFormatPipe],
  exports: [MailToDirective, PhoneNumberFormatPipe],
})
export class SharedModule {}
