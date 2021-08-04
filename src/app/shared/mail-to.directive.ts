import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMailTo]',
})
export class MailToDirective implements AfterViewInit {
  @Input() appMailTo!: string;

  constructor(private el: ElementRef<HTMLAnchorElement>) {}

  ngAfterViewInit(): void {
    this.el.nativeElement.href = 'mailto:' + this.appMailTo;
  }
}
