import { Component,ChangeDetectorRef } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol  } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [ IonHeader, IonToolbar, 
    IonTitle, IonContent, FormsModule, CommonModule, IonCol, IonRow, IonGrid],
})
export class Tab3Page {
  private readonly http:HttpClient;
  funcion:any = [];
  
  constructor(http:HttpClient, private cdr : ChangeDetectorRef) {
    this.http = http;
    this.buscarFuncion();
  }

  buscarFuncion(){
    this.http.get("http://localhost:8080/funcion/buscar").subscribe(
      data => {
        this.funcion = data;
        this.cdr.detectChanges();
      }
    )
  }
}