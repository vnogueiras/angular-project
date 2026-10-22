import { Component, EventEmitter, Input, Output } from '@angular/core';

type User = {
  id: string, 
  avatar: string, 
  name: string
}

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class UserComponent {
  @Input({required: true}) user!: User

  @Output() select = new EventEmitter()

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
