import { Directive, OnInit, ElementRef, inject, Renderer2, OnDestroy, Input, AfterContentChecked } from '@angular/core';
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
    Nota:
    1- se manda a llamar el método [changePosition()] para que al cargar la
    vista por primera vez valide las dimenciones del ancho y de esta manera
    pueda ajustar los contenedores del footer acorde a la pantalla especifica.

    2- la forma [useRender2()] se deja comentada pero funciona correctamente,
    si gusta puede comentar el método useFromEvent() y descomentar useRender2()
    y verá que el funcionamiento es el mismo.*/
    
    this.changePosition();
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
    const widthView = this.footerRef.offsetParent.clientWidth;
    const index = this.takeChildrenParent.indexOf(this.takeDivText);

    if (widthView < brekpoint && index === 1) {
      this.moveElement(this.takeDivText, this.takeDivImg);
    } else if (widthView >= brekpoint && index === 0) {
      this.moveElement(this.takeDivImg, this.takeDivText);
    }
  }

  moveElement(moveElementRef: unknown, elementRefExist: unknown): void {
    const isMove = true;
    this.render2.insertBefore(
      this.footerRef,
      moveElementRef,
      elementRefExist,
      isMove);
  }

  ngOnDestroy(): void {    
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

}