import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Authentication} from '../services/authentication';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login  implements OnInit{

  public loginFormGroup! : FormGroup
  constructor(private fb : FormBuilder,
              private authService : Authentication,
              private router: Router) {
  }
    ngOnInit(): void {
        this.loginFormGroup = this.fb.group( {
          username : this.fb.control(''),
          password : this.fb.control('')
        }
        )
    }

  protected login() {
    let username : string = this.loginFormGroup.value.username
    let password : string = this.loginFormGroup.value.password
    let auth : boolean =  this.authService.login(username, password)

    if(auth==true){
      this.router.navigateByUrl("/admin")
    }

  }
}

