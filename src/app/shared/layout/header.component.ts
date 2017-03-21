import { Component } from '@angular/core';

@Component({
 moduleId: module.id,
 selector: 'layout-header',
 templateUrl: 'header.component.html'
})
export class HeaderComponent {
 constructor() {}

 name: string = 'Angular2';
}