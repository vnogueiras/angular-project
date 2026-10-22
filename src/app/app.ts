import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  imports: [HeaderComponent, User, Tasks],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  users = DUMMY_USERS
  selectedUserId = this.users[0].id

  get selectedUser(){
    return this.users.find(user => user.id === this.selectedUserId)!
  }

  onSelectUser(id: string){
    this.selectedUserId = id
  }
}
