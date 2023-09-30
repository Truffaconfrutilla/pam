import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { AbstractControl } from '@angular/forms';
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
    private toastController:ToastController
    ) {

  this.formularioRegister = this.fb.group({
    'name': new FormControl("", Validators.required),
    'email': new FormControl("", [Validators.required, Validators.email]),
    'password': new FormControl("", Validators.required),
    'confpassword': new FormControl("", [Validators.required])
  });
      

  }

  ngOnInit() {
  }
  

  //async mensajeCreado(mensaje: string) {
  //  const toast = await this.toastController.create({
  //    message: mensaje,
  //    duration: 2000,
  //    position: 'bottom'
  //  });
  //  toast.present()
  //}
  
  //async register(nombre: any, correo: any, contraseña: any, direccionSede: any, conductor: any, licenciaConductor: any, patenteVehiculo: any) {
  async register(nombre: any, correo: any, contraseña: any) {
    if (this.formularioRegister.invalid) {
      Swal.fire({
        icon: 'warning',
        iconColor: 'red' ,
        title: 'Oops...',
        text: 'Debes llenar todos los datos!',
        heightAuto: false
      });
    }else {
     //// Los datos del formulario son válidos
     //if (conductor.value === true) {
     //  licenciaConductor = "no aplica";
     //  patenteVehiculo = "no aplica";
     //}
      //this.mensajeCreado("Usuario Creado");
      Swal.fire({
        heightAuto: false,
        title: 'Cuenta creada con éxito! ',        
        timer: 5000
      })
      
      //console.log(nombre.value, correo.value, contraseña.value, direccionSede.value, conductor.value, licenciaConductor.value, patenteVehiculo.value);
      console.log(nombre.value, correo.value, contraseña.value);
      
    }
  }
  

}