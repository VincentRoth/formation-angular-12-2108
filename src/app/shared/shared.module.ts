import { NgModule } from '@angular/core';
import { AnimalService } from './api/animal.service';
import { MailToDirective } from './mail-to.directive';

@NgModule({
  providers: [AnimalService],
  declarations: [
    MailToDirective
  ],
  exports: [MailToDirective]
})
export class SharedModule { }