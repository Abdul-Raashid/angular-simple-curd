import { Component } from '@angular/core';
import { AddUserComponent } from './add-user/add-user.component';
import { DisplayUserComponent } from './display-user/display-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddUserComponent, DisplayUserComponent],
  template: `
    <h1>Basic CRUD User App</h1>
    <app-add-user></app-add-user>
    <app-display-user></app-display-user>
  `
})
export class AppComponent {}
