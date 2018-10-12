import { Directive, HostListener, ElementRef, Renderer, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    //this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    //this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = this.defaultColor;
  }

  //@HostBinding('style.backgroundColor') backgroundColor: string;
  private backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor(){
    //pode adicionar código extra, caso precise manipular a variável antes de 
    //setar o valor definitivo no atributo da tag HTML.
    return this.backgroundColor;
  }

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';
  
  constructor(
    //private _elementRef: ElementRef,
    //private _renderer: Renderer
  ) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}
