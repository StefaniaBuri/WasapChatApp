import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonButton, IonList, IonLabel, IonNote, IonTextarea, IonItemDivider, IonIcon, IonDatetime, IonImg, IonAvatar, IonChip } from '@ionic/angular/standalone';
import { FirebaseRTBService } from '../services/firebase-rtb.service';
import { CommonModule,  } from '@angular/common';
import { FormsModule } from '@angular/forms';

const ALIAS_KEY = "ALIAS";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonChip, IonAvatar, IonImg, IonDatetime, IonIcon, IonItemDivider, IonTextarea, IonNote, IonLabel, IonList, IonButton, IonItem, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, FormsModule],
})
export class HomePage {
  public mensajes : any[] = [];
  public from: string = "";
  public message: string = "";
  public registrado: boolean = false;

  constructor(public firebaseService: FirebaseRTBService) {
    this.mensajes = this.firebaseService.mensajes;
    let alias = localStorage.getItem(ALIAS_KEY);
    if (alias) {
      this.registrado = true;
      this.from = alias;
    }
  }

  public enviar() {
    //console.log("Enviando..." + this.from + this.message);
    this.firebaseService.enviarMensaje(this.from, this.message);
    this.message = "";
  }

  public registrarUsuario() {
    localStorage.setItem(ALIAS_KEY, this.from)
    this.registrado = true;
  }
}
