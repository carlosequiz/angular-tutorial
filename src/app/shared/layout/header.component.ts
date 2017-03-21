import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
 moduleId: module.id,
 selector: 'layout-header',
 templateUrl: 'header.component.html',
 styles: ['h2 { color: red; }']
})
export class HeaderComponent {
    constructor() {}

    //name: string = 'Angular2';

    @Input() name: string;
    @Output() onNameChanged = new EventEmitter<string>();

    changeName(newName: string) {
        this.onNameChanged.emit(newName);
    }
}