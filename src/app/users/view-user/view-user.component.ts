import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  userId: string='';
  userDetails:any;
  constructor(private userService : UserService, private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data =>{
      this.userId = data['id'];
      console.log(this.userId);
  })
  this.userService.viewUser(this.userId).subscribe(data =>{
    this.userDetails = data;
    })
  }
}
