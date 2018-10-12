import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    //this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    //this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }

  //@HostBinding('style.backgroundColor') backgroundColor: string;
  private backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor(){
    //pode adicionar código extra, caso precise manipular a variável antes de 
    //setar o valor definitivo no atributo da tag HTML.
    return this.backgroundColor;
  }
  
  constructor(
    //private _elementRef: ElementRef,
    //private _renderer: Renderer
  ) { }

}