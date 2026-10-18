import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Home} from './home/home';
import {Profile} from './profile/profile';
import {Dashboard} from './dashboard/dashboard';
import {Students} from './students/students';
import {Payments} from './payments/payments';
import {LoadPayments} from './load-payments/load-payments';
import {LoadStudents} from './load-students/load-students';
import {Login} from './login/login';
import {AdminTemplate} from './admin-template/admin-template';
import {AuthGuard} from './guards/auth-guard';
import {AuthorizationGuard} from './guards/authorization-guard';

const routes: Routes = [
  {path:"", component : Login },
  {path:"login", component : Login},

  {path:"admin", component : AdminTemplate, canActivate : [AuthGuard],

    children : [
  {path:"home", component: Home},
  {path:"profile", component:Profile},
  {path:"dashboard", component : Dashboard},
  {path:"students", component : Students},
  {path : "payments", component : Payments},
  {path:"loadPayments", component : LoadPayments, canActivate : [AuthorizationGuard], data : { roles :['ADMIN']} },
  {path:"loadStudents", component : LoadStudents , canActivate : [AuthorizationGuard], data : {roles: ['ADMIN']}}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

