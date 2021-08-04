import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AnimalService } from './api/animal.service';
import { MailToDirective } from './mail-to.directive';
import { PhoneNumberFormatPipe } from './phone-number-format.pipe';

@NgModule({
  providers: [AnimalService],
  declarations: [MailToDirective, PhoneNumberFormatPipe],
  imports: [HttpClientModule],
  exports: [MailToDirective, PhoneNumberFormatPipe],
})
export class SharedModule {}
