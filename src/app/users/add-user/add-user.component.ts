import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm : FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private userSerive: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'fname': new FormControl(''),
      'lname': new FormControl(''),
      'mname': new FormControl(''),
      'age': new FormControl(''),
      'gender': new FormControl(''),

    })
  }

  CreateUser(){
    this.userSerive.addUser(this.addUserForm.value).subscribe(data => {
      this._snackBar.open("User created successfully.");
      console.log("User Created");
    },err => {
      this._snackBar.open("Unable to create a user.");
      console.log(err);
    })
}

}