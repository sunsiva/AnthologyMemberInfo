import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm : FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private userSerive: UserService, 
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'fname': new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(50)]),
      'lname': new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(50)]),
      'mname': new FormControl(''),
      'age': new FormControl('', [Validators.required,Validators.maxLength(2)]),
      'gender': new FormControl('', [Validators.required])
    })
  }

  CreateUser(){
    this.userSerive.addUser(this.addUserForm.value).subscribe(data => {
      this._snackBar.open("User created successfully.");
      console.log(data.toString()+" User Created");
    },err => {
      this._snackBar.open("Unable to create a user.");
      console.log(err);
    })
}
}