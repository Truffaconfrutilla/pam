import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, MenuController, NavController, ToastController } from '@ionic/angular';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { UserrandomService } from 'src/app/services/util/userrandom.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  listaUsuarios: Usuario[] = [];
  user: any;
  emailValue?: string;
  passwordValue?: string;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private navCtrl: NavController, 
    private usuarioService: UsuariosService,
    private menu: MenuController,
    private userrandom: UserrandomService,
    private toastController: ToastController,
  
    ) {

    this.formularioLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    })

  }

  ngOnInit() {
    this.menu.enable(true);
    this.userrandom.getRandomUser().subscribe((data) => {
      //console.log(data)
      this.user = data.results[0];
      this.emailValue = this.user.email;
      this.passwordValue = this.user.login.password;
      console.log(this.user.email + " " + this.user.login.password)
    })  
  }

  ingresar(user:any, password:any) {
    this.usuarioService.getUser(user.value, password.value);
    this.mensajeToast("Bienvenido al Sistema!");
    this.router.navigate(['home']);
  }
  
  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 4000,
      position: 'bottom'
    });
    toast.present()
  }



  //async ingresar() {
  //  var f = this.formularioLogin.value;
  //  
  //  // Definir la clave 'usuario' como la que se usará para obtener los datos del localStorage
  //  const claveUsuario = 'usuario';
  //
  //  // Obtener los datos del usuario del localStorage
  //  var usuarioString = localStorage.getItem(claveUsuario);
  //
  //  if (usuarioString !== null) {
  //    // Parsear los datos del usuario si existen en el localStorage
  //    var usuario = JSON.parse(usuarioString);
  //
  //    if (usuario.email == f.email && usuario.password == f.password) {
  //      console.log('ingresado');
  //      localStorage.setItem('ingresado','true');
  //      this.navCtrl.navigateRoot('home')
  //    } else {
  //      Swal.fire({
  //        icon: 'question',
  //        iconColor: 'black',
  //        text: 'Segur@ que tus datos están bien?',
  //        heightAuto: false
  //      });
  //    }
  //  } else {
  //    // Manejar el caso en el que no se encuentra ningún usuario en el localStorage
  //    console.error('No se encontraron datos de usuario en el localStorage.');
  //  }
  //}

  registrar() {
    this.router.navigate(['register']);
  }
  

}
