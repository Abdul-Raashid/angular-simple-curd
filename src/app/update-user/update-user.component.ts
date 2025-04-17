import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="modal">
      <h3>Update User</h3>
      <form (ngSubmit)="updateUser()" #updateForm="ngForm">
        <input type="text" [(ngModel)]="user.name" name="name" required />
        <input type="password" [(ngModel)]="user.password" name="password" required />
        <button type="submit" [disabled]="updateForm.invalid">Update</button>
        <button type="button" (click)="close.emit()">Cancel</button>
      </form>
    </div>
  `,
  styleUrls: ['./update-user.component.css'],
  styles: [`
    .modal {
      background: #eee;
      padding: 20px;
      border-radius: 8px;
      margin-top: 20px;
    }
  `]
})
export class UpdateUserComponent {
  @Input() user!: User;
  @Output() close = new EventEmitter<void>();

  constructor(private userService: UserService) {}

  updateUser() {
    this.userService.updateUser(this.user);
    this.close.emit();
  }
}
