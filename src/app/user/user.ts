import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  @Input({required: true}) id!: string
  @Input({required: true}) avatar!: string
  @Input({required: true}) name!: string
  @Output() select = new EventEmitter()

  get imagePath() {
    return 'assets/users/' + this.avatar
  }

  onSelectUser(){
    this.select.emit(this.id);
  }
}
