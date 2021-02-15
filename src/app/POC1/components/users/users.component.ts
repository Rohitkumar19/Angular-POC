import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  conditionFlag: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.users = this.getUsers();
  }

  getUsers(): User[]{
    return [
      {name: 'Rohit', age: 24},
      {name: 'Abhay', age: 30},
      {name: 'Rohan', age: 36},
      {name: 'Pratik', age: 41},
      {name: 'Rajeev', age: 46}
    ]
  }

}


