import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-items',
  templateUrl: './user-items.component.html',
  styleUrls: ['./user-items.component.css']
})
export class UserItemsComponent{

  message: string = "Successfully Stored!";
  isValid: boolean = true;

  usernames : string[] = ["Shiny", "Salome", "Sharone", "Jasmine"];

  users: any = [{"name":"Shiny","age":22},
  {"name":"Vasanthi", "age":51},
  {"name":"NDJK", "age":54}
];

}
