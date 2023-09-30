import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router
    ) {

    this.formularioLogin= this.fb.group({
      'email': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)

    })

  }

  ngOnInit() {
  
  }

  ingresar() {
    this.router.navigate(['ingresar']);
  }

}
