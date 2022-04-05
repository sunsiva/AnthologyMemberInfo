import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import { MatFormFieldControl } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    ListUsersComponent,
    ViewUserComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTableModule
  ],
  providers:[{
    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}
  }]
})
export class UsersModule { }
