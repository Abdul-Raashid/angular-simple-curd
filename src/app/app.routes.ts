// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { UpdateUserComponent } from './update-user/update-user.component'; // Make sure this is imported

export const routes: Routes = [
  { path: 'add-user', component: AddUserComponent },
  { path: 'display-users', component: DisplayUserComponent },
  { path: 'edit-user/:id', component: UpdateUserComponent }, // Route with an 'id' parameter
  { path: '', redirectTo: '/add-user', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent },
];