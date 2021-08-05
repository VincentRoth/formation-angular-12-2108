import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AnimalService } from './api/animal.service';
import { MailToDirective } from './mail-to.directive';
import { PhoneNumberFormatPipe } from './phone-number-format.pipe';
import { TimeInterceptor } from './api/time.interceptor';
import { UiModule } from './ui/ui.module';

@NgModule({
  providers: [
    AnimalService,
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
  ],
  declarations: [MailToDirective, PhoneNumberFormatPipe],
  imports: [HttpClientModule],
  exports: [MailToDirective, PhoneNumberFormatPipe, UiModule],
})
export class SharedModule {}
