import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean){
    if (!condition){
      this._viewContainerRed.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainerRed.clear();
    }
  }

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRed: ViewContainerRef
  ) { }

}
