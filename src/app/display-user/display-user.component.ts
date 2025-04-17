import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-display-user',
  standalone: true,
  imports: [CommonModule, UpdateUserComponent],
  template: `
    <h3>User List</h3>
    <ul>
      <li *ngFor="let user of users">
        {{ user.name }} - {{ user.password }}
        <button (click)="deleteUser(user.id)">Delete</button>
        <button (click)="selectUser(user)">Edit</button>
      </li>
    </ul>

    <app-update-user *ngIf="selectedUser" [user]="selectedUser" (close)="selectedUser = null"></app-update-user>
  `,
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent {
  users: User[] = [];
  selectedUser: User | null = null;

  constructor(private userService: UserService) {
    this.userService.users$.subscribe(users => this.users = users);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id);
  }

  selectUser(user: User) {
    this.selectedUser = { ...user }; // clone to avoid binding issues
  }
}
