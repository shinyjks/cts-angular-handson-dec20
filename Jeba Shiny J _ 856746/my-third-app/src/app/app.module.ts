import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SuccessComponent } from './success/success.component';

let routes : Routes = [
  {path : "", component : EmployeeRegisterComponent}, 
  {path : "register", component: EmployeeRegisterComponent}, 
  {path : "user-details", component : UserDetailsComponent},
  {path : "employee-details", component : EmployeeDetailsComponent},
  {path : "login", component : LoginFormComponent},
  {path : "success/:employeeId", component : SuccessComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeRegisterComponent,
    UserDetailsComponent,
    LoginFormComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
