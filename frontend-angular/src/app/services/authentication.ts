import {Injectable, OnInit, Service} from '@angular/core';
import {Router} from '@angular/router';


@Injectable()
export class Authentication {

public authUsername :string =''
  public autUserRoles  : string[] =[]
  public isAuthenticated : boolean = false

  public users : any =  {
    'admin' : ['ADMIN', 'STUDENT'],
    'user1' : ['STUDENT']
  }

  constructor(private router : Router) {
  }



  public login(username: string, password: string) : boolean{
    if(this.users[username] && password=="1234") {
      this.authUsername = username
      this.autUserRoles = this.users[username]
      this.isAuthenticated = true
      return true
    }
    return false
  }

  logout() {
    this.authUsername =""
    this.autUserRoles = []
    this.isAuthenticated = false
    this.router.navigateByUrl("/login")
  }
}

