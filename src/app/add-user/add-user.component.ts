import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h3>Add User</h3>
    <form (ngSubmit)="addUser()" #userForm="ngForm">
      <input type="text" [(ngModel)]="name" name="name" placeholder="Name" required />
      <input type="password" [(ngModel)]="password" name="password" placeholder="Password" required />
      <button type="submit" [disabled]="userForm.invalid">Add</button>
    </form>
  `,
  styleUrls: ['./add-user.component.css'] // Add this line
})
export class AddUserComponent {
  name = '';
  password = '';

  constructor(private userService: UserService) {}

  addUser() {
    this.userService.addUser({ name: this.name, password: this.password });
    this.name = '';
    this.password = '';
  }
}
