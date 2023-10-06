import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formularioRegister: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController,
    private navCtrl: NavController,
  ) {

    this.formularioRegister = this.fb.group({
      'name': new FormControl("", Validators.required),
      'email': new FormControl("", [Validators.required, Validators.email]),
      'password': new FormControl("", Validators.required),
      'confpassword': new FormControl("", [Validators.required]),
      'conductor': new FormControl(false),
      'direccionSede': new FormControl(false),
      'licenciaConductor': new FormControl(false),
      'patenteVehiculo': new FormControl(false),
    });
    
  }
  
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const passwordControl = this.formularioRegister.get('password');
  
    if (!passwordControl) {
      return null; // Otra opción podría ser devolver un error aquí si es necesario
    }
  
    const password = passwordControl.value;
    const confirmPassword = control.value;
  
    if (password !== confirmPassword) {
      return { 'passwordMismatch': true };
    }
  
    return null;
  }
  

  ngOnInit() {
  }

  async register() {
    if (this.formularioRegister.invalid) {
      Swal.fire({
        icon: 'warning',
        iconColor: 'red',
        title: 'Oops...',
        text: 'Debes llenar todos los datos!',
        heightAuto: false
      });
      return; // Detener el registro si el formulario es inválido.
    }
  
    const { name, email, password, confpassword, direccionSede, conductor, licenciaConductor, patenteVehiculo } = this.formularioRegister.value;
  
    if (password !== confpassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas no coinciden.',
        heightAuto: false
      });
      return; // Detener el registro si las contraseñas no coinciden.
    }
  
    // Realizar aquí la lógica de registro según tus necesidades.
  
    // Redirigir al usuario después de un registro exitoso.
    
    Swal.fire({
      heightAuto: false,
      title: 'Cuenta creada con éxito!',
      timer: 5000
    });

    this.router.navigate(['login']);  
    console.log('Registro exitoso');
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Contraseña:', password);
    console.log('conductor:', conductor);
    console.log('direccionSede:', direccionSede);
    console.log('licenciaConductor:', licenciaConductor);
    console.log('patenteVehiculo:', patenteVehiculo);
    
  
    const usuario = {
      name: name,
      email: email,
      password: password,
    };
    
  }
  
}
