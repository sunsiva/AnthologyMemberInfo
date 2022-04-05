import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
export interface Users {
  id: number;
  fname: string;
  lname: string;
  age: string;
}

const ELEMENT_DATA: Users[] = [];

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fname', 'lname', 'age', 'action'];
  dataSource = ELEMENT_DATA;
  listUsers: Users[]= [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.listUsers().subscribe(data => {
      this.listUsers = data;
    });
  }

}
