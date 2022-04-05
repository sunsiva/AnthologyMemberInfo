import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userId: any;
  userDetails: any;
  editUserForm: FormGroup = new FormGroup({});
  dataLoaded: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId = data['id'];
    });

    if(this.userId !== ''){
      this.userService.viewUser(this.userId).toPromise().then(data => {
        this.userDetails = data;
        Object.assign(this.userDetails, data);
        console.log(this.userDetails);

        //Build the edit form
        this.editUserForm = this.formBuilder.group({
          'fname': new FormControl(this.userDetails.fname),
          'mname': new FormControl(this.userDetails.mname),
          'lname': new FormControl(this.userDetails.lname),
          'age': new FormControl(this.userDetails.age),
          'gender': new FormControl(this.userDetails.gender)

        })
        this.dataLoaded=true;
      })
      .catch(err => {
        console.log(err);
      })
    }
  }

  updateUser(){
    this.userService.updateUser(this.userId, this.editUserForm.value).subscribe(data => {
      this._snackBar.open("User updated successfully.");
      console.log(data.toString()+" User update");
    },err => {
      this._snackBar.open("Unable to update a user.");
      console.log(err);
    })
  }
}
