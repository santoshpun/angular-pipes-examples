import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {
  birthday = new Date(2001,1,1,18,0,0);
  name: string;
  totalAmount: number = 5000;

  constructor() { }

  ngOnInit() {
    this.name = 'Steve';
  }

}
