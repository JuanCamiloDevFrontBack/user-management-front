import { Directive, OnInit, ElementRef, inject, Renderer2, OnDestroy, Input } from '@angular/core';
import { Subject, debounceTime, fromEvent, takeUntil } from 'rxjs';

@Directive({
  selector: '[appResponseFooter]'
})
export class ResponseFooterDirective implements OnInit, OnDestroy {

  private divImg!: HTMLDivElement;
  private divText!: HTMLDivElement;
  private unsuscribe$: Subject<void> = new Subject();

  @Input() set changeContainers(containers: object) {
    const { leftContainer, centerContainer }: any = containers;
    this.takeDivImg = leftContainer;
    this.takeDivText = centerContainer;
  }

  private readonly footerRef = inject(ElementRef).nativeElement;
  private readonly render2 = inject(Renderer2);

  get takeDivImg(): HTMLDivElement | ElementRef {
    return this.divImg;
  }

  set takeDivImg(elRef: HTMLDivElement) {
    this.divImg = elRef;
  }

  get takeDivText(): HTMLDivElement | ElementRef {
    return this.divText;
  }

  set takeDivText(elRef: HTMLDivElement) {
    this.divText = elRef;
  }

  get takeChildrenParent(): any[] {
    return Array.from(this.footerRef.childNodes);
  }

  ngOnInit(): void {
    /*
    Nota: la forma [useRender2()] se deja comentada pero funciona correctamente,
    si gusta puede comentar el método useFromEvent() y descomentar useRender2()
    y verá que el funcionamiento es el mismo.*/

    // this.useRender2();
    this.useFromEvent();
  }

  useRender2(): void {
    this.render2.listen(visualViewport, 'resize', () => this.changePosition());
  }

  useFromEvent(): void {
    fromEvent(window, 'resize')
      .pipe(debounceTime(500))
      .pipe(takeUntil(this.unsuscribe$))
      .subscribe(() => this.changePosition());
  }

  changePosition(): void {
    const brekpoint = 576;
    const widthView = (this.footerRef as any).offsetParent.clientWidth;
    const isMove = true;
    const index = this.takeChildrenParent.indexOf(this.takeDivText);
    
    if (widthView < brekpoint && index === 1) {
      this.render2.insertBefore(
        this.footerRef,
        this.takeDivText,
        this.takeDivImg,
        isMove);
    } else if (widthView >= brekpoint && index === 0) {
      this.render2.insertBefore(
        this.footerRef,
        this.takeDivImg,
        this.takeDivText,
        isMove);
    }
  }

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

}