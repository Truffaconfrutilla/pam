import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {

  listado = []

  constructor(
    private listar: UsuarioService,
    private loadingCtrl: LoadingController) { }

  ionViewWillEnter(){
    this.loadUsuarios()
  }

  async loadUsuarios(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message:"Cargando...",
      spinner:"bubbles"
      }
    )
    await loading.present();

    this.listar.listUsuarios().subscribe(
      //funcion anonima 
      (resp) => {
        loading.dismiss();
        //respuesta tipo json, hay que convertirla a string, luego pasarlo al arreglo
        let  listString= JSON.stringify(resp)
        this.listado = JSON.parse(listString)
        //Evento termina cuando se completa la muestra de datos
        event?.target.complete()
      },
      (err)=> {
        console.log(err.message)
        loading.dismiss();
      }
    )
  }


}
