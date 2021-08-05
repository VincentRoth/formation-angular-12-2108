import { ElementRef } from '@angular/core';
import { MailToDirective } from './mail-to.directive';

describe('MailToDirective', () => {
  let directive: MailToDirective;
  let element: HTMLAnchorElement;

  beforeEach(() => {
    element = document.createElement('a');
    directive = new MailToDirective(new ElementRef(element));
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should set href', () => {
    const mail = 'mail@test.com';
    directive.appMailTo = mail;
    directive.ngAfterViewInit();
    expect(element.href).toEqual('mailto:' + mail);
  });
});
