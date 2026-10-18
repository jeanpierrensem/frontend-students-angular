import {Component, OnInit, signal} from '@angular/core';
import {Router} from '@angular/router';
import {Authentication} from '../services/authentication';

@Component({
  selector: 'app-admin-template',
  standalone: false,
  styleUrl: './admin-template.css',
  templateUrl: './admin-template.html',
})
export class AdminTemplate implements OnInit{
   currentRoute : string = ""
 constructor(private router:Router, public authService : Authentication) {
 }

  ngOnInit(): void {
  }
  protected gotoHome() {
    this.currentRoute = "home"
    this.router.navigateByUrl("/admin/" + this.currentRoute)
  }

  protected gotoProfile() {
    this.currentRoute = "profile"
    this.router.navigateByUrl("/admin/" + this.currentRoute)
  }

  protected gotoStudent() {
    this.currentRoute = "students"
    this.router.navigateByUrl("/admin/" + this.currentRoute)
  }

  protected gotoDashboard() {
    this.currentRoute = "dashboard"
    this.router.navigateByUrl("/admin/" + this.currentRoute)
  }

  protected gotoPayment() {
    this.currentRoute = "payments"
    this.router.navigateByUrl("/admin/" + this.currentRoute)
  }

  protected gotoLoadStudent() {
    this.currentRoute = "loadStudents"
    this.router.navigateByUrl("/admin/" + this.currentRoute)
  }

  protected gotoLoadPayments() {
    this.currentRoute = "loadPayments"
    this.router.navigateByUrl("/admin/" + this.currentRoute)
  }

  protected gotoLogin() {
    this.authService.logout()
  }
}
