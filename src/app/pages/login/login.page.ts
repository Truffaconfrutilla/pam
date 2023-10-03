import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private navCtrl: NavController, 
    ) {

    this.formularioLogin= this.fb.group({
      'email': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)

    })

  }

  ngOnInit() {
  
  }

  async ingresar() {
    var f = this.formularioLogin.value;
    
    // Definir la clave 'usuario' como la que se usará para obtener los datos del localStorage
    const claveUsuario = 'usuario';
  
    // Obtener los datos del usuario del localStorage
    var usuarioString = localStorage.getItem(claveUsuario);
  
    if (usuarioString !== null) {
      // Parsear los datos del usuario si existen en el localStorage
      var usuario = JSON.parse(usuarioString);
  
      if (usuario.email == f.email && usuario.password == f.password) {
        console.log('ingresado');
        localStorage.setItem('ingresado','true');
        this.navCtrl.navigateRoot('home')
      } else {
        Swal.fire({
          icon: 'question',
          iconColor: 'black',
          text: 'Segur@ que tus datos están bien?',
          heightAuto: false
        });
      }
    } else {
      // Manejar el caso en el que no se encuentra ningún usuario en el localStorage
      console.error('No se encontraron datos de usuario en el localStorage.');
    }
  }

  registrar() {
    this.router.navigate(['register']);
  }
  

}
