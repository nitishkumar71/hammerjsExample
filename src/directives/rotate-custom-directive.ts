import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
    selector: '[rotateCustom]'
})
export class RotateCustomeDirective {
    @Output() angleChange = new EventEmitter<any>();

    //although rotatestart is not required here, but we are keeping it here for reference purpose
    /*
         @HostListener('rotatestart', ['$event']) protected onRotateStart(event) {
            event.preventDefault();
            console.log('Rotate Start');
            console.log(event);
        }
    */

    @HostListener('rotatemove', ['$event']) protected onRotateMove(event) {
        event.preventDefault();
        console.log('Rotate Move');
        console.log(event);
        this.angleChange.emit({ angle: event.angle });
    }
}