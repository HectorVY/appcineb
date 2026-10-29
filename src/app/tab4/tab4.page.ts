import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  imports: [CommonModule, FormsModule,IonItem, IonList, IonSelect, IonSelectOption]
})
export class Tab4Page implements OnInit {
  private readonly http: HttpClient;
  peliculas: any =[];
  salas: any = [];
  funciones: any = [];

  fechas: any = [];
  horas: any = [];

  constructor(http: HttpClient, private cdr: ChangeDetectorRef) {
    this.http = http;
    this.buscarPeliculas();
    this.buscarSalas();
    this.buscarFunciones();
   }

  ngOnInit() {
  }
    buscarPeliculas(){
    this.http.get("http://localhost:8080/pelicula/buscar").subscribe(
      data => {
        this.peliculas = data;
        this.cdr.detectChanges();
      }
    )
  }
    buscarSalas(){
    this.http.get("http://localhost:8080/sala/buscar").subscribe(
      data => {
        this.salas = data;
        this.cdr.detectChanges();
      }
    )
  }
    buscarFunciones(){
    this.http.get("http://localhost:8080/funcion/buscar").subscribe(
      data => {
        this.funciones = data;
        this.cdr.detectChanges();
        this.procesarFechas();
      }
    )
  }
    procesarFechas() {
    this.fechas = [];
    for (let i = 0; i < this.funciones.length; i++) {
      let registro = this.funciones[i];
      if (this.fechas.indexOf(registro.fecha) === -1) {
        this.fechas.push(registro.fecha);
      }
    }
  }

  cambioFecha(event: any) {
    let dia = event.detail.value;
    this.horas = [];
    for (let i = 0; i < this.funciones.length; i++) {
      let registro = this.funciones[i];
      if (registro.fecha === dia) {
        this.horas.push(registro);
      }
    }
    this.cdr.detectChanges();
  }
    customAlertOptions = {
    header: 'Peliculas',
    subHeader: 'Escoga la pelicula a ver',
    message: 'Solo puede escoger una por sesion',
    translucent: true,
  };

    customAlertOptions1 = {
    header: 'Salas de Cine',
    subHeader: 'Seleccione la sala que desee',
    message: 'Solo puede escoger una por sesion',
    translucent: true,
  };

    customAlertOptions2 = {
    header: 'Funciones de Cine',
    subHeader: 'Seleccione la hora que desee',
    message: 'Solo puede escoger una por sesion',
    translucent: true,
  };
    customAlertOptions3 = {
    header: 'Horarios',
    subHeader: 'Seleccione la hora de la función',
    message: 'Solo puede escoger una por sesion',
    translucent: true,
  };


}
