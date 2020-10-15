import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth-service/auth.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public name: string;
  public email: string;
  public password: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmitRegister() {
    this.auth.register(this.email, this.password, this.name).then( auth => {
      this.router.navigate[("/home")]
      console.log(this.auth)
    }).catch(err=> console.log(err))

  }

}
