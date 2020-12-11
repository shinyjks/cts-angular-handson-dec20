import { Component, OnInit } from '@angular/core';
import { Hello } from '../hello/hello';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent{
  name : string = "Shiny";
  salary : number = 5000;
  dob : Date = new Date("1998-10-06");
  hello1 : Hello = new Hello(55, "Hello Message");
}
