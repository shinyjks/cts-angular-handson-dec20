import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{

  id : number = undefined;
  password : string = undefined;

  constructor(private _service : EmployeeService, private _router : Router){}

  handleLogin(loginValues : any){
    let loggedIn = this._service.login(loginValues.id, loginValues.password);
    if(loggedIn)
      this._router.navigate(["success",loginValues.id]);
    else
      this._router.navigate(["register"]);
  }
}
