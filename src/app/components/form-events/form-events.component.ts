import { Component } from '@angular/core';

interface User {
  name: string;
  email: string;
  editing: boolean;
}

@Component({
  selector: 'app-form-events',
  templateUrl: './form-events.component.html',
  styleUrls: ['./form-events.component.css']
})
export class FormEventsComponent{

  user: User = {
    name: '',
    email: '',
    editing: false
  };

  users:any[] = [];

  constructor() { }

  onSubmit(form) {
    this.users.push({
      name: this.user.name,
      email: this.user.email,
      editing: false
    });
    form.resetForm();
  }

  removeUser(i) {
    this.users.splice(i, 1);
  }

  editInfo(user) {
    user.editing = !user.editing;
  }
}
