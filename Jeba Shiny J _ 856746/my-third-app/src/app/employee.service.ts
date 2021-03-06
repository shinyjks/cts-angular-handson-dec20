import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees : any = [];

  constructor(private _http: HttpClient) { }

  login(id : number, password : string) :boolean{
    if((id == 1000 || id == 2000) && password == "angular")
      return true;
    else
      return false;
  }

  fetchUsers() : Observable<any>{
    let uri = "https://jsonplaceholder.typicode.com/users";
    return this._http.get(uri);
  }

  store(values : any) : any{
    this.employees.push(values);
  }

  dummyDetails() : any {
    return this.employees;
  }
}
