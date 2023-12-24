import { Directive, OnInit, ElementRef, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[appResponseFooter]'
})
export class ResponseFooterDirective implements OnInit {

  private readonly eleRef = inject(ElementRef);
  private readonly vcr = inject(ViewContainerRef);

  ngOnInit(): void {
      console.log('eleref: ', this.eleRef);
      console.log('vcr: ', this.vcr);
      console.log('vcr: ', this.vcr.element);
      
    // this.vcr.move(this.eleRef, 8);
  }

}
