import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
    selector: '[appUnless]'
})
export class UnlessDirective {
    @Input()
    set appUnless(conditon: boolean) {
        if (!conditon) {
            this.vcRef.createEmbeddedView(this.templateRef);
        }
        else {
            this.vcRef.clear();
        }
    }
    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
    }
}
