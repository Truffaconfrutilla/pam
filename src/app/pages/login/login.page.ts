import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, MenuController, NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { RandomUserService } from 'src/app/services/random-users.service';
import { Usuario } from 'src/app/models/usuario.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  //user: any; 
  //emailValue?: string;
  //passwordValue?: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private navCtrl: NavController,    
    private menu: MenuController,   
    private toastController: ToastController,
    private randomUserService: RandomUserService,
    private authService: AuthService,
  ) {
    this.formularioLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    this.menu.enable(true);

    // Llama al servicio para obtener un usuario aleatorio al iniciar el componente
  //  this.randomUserService.getRandomUser().subscribe((data) => {
  //    this.user = data.results[0];
  //    this.emailValue = this.user.email;
  //    this.passwordValue = this.user.login.password;
  //    console.log(this.user.email + " " + this.user.login.password)
  //  });
  }


  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 4000,
      position: 'bottom'
    });
    toast.present()
  }

  ingresar() {
    if (this.formularioLogin.invalid) {
      // Validamos el formulario      
      return;
    }

    const { email, password } = this.formularioLogin.value;

    const usuario: Usuario | undefined = this.authService.iniciarSesion(email, password);

    if (usuario) {
      this.mensajeToast("Bienvenido al Sistema!");
      this.router.navigate(['home']);
      console.log('ENTRANDO');      
      console.log('Email:', email);
      console.log('Password:', password);
      
    } else {
      Swal.fire({
        icon: 'question',        
        title: 'Oops...',
        text: 'Segur@ que los datos estan bien?',
        heightAuto: false
      });
    }
  }
    

  registrar() {
    this.router.navigate(['register']);
  }
}
