import {AfterViewInit, Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocusDirective   {

  @Input() appHoverHighlight = '';


  constructor(private el :ElementRef) { }
  @Input() appHoverOnFocus = '';

  @HostListener('focus') onFocus() {
    this.onfocus(this.appHoverOnFocus || 'red');
  }

  @HostListener('blur') onBlur() {
    this.onfocus('');
  }
  private onfocus(color: string) {
    this.el.nativeElement.style.backgroundColor = color; // Apply the background color
  }
}
