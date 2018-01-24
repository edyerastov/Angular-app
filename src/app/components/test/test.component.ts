import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  name:string = 'Ed';
  showName:boolean = true;
  greeting:number = 4;

  //bind prop
  imgUrl:string = 'http://lorempixel.com/400/200';
  articleHide:boolean = true;

  //ngClass
  isSpecial:boolean = true;
  canSave:boolean = true;
  currentClasses = {};

  constructor() {
    this.currentClasses = {
      special: this.isSpecial,
      saveble: this.canSave
    }
  }

}















