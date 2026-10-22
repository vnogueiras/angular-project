import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';

@Component({
  imports: [HeaderComponent, User],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  users = DUMMY_USERS
  selectUser = this.users[0]

  onSelectUser(id: string){
    this.selectUser = this.users[this.users.findIndex(user => user.id == id)]
    console.log(this.selectUser)
  }
}
