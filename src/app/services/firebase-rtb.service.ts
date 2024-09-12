import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Database, DatabaseReference, getDatabase, onValue, ref, remove, set, push } from
  "firebase/database";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseRTBService {

  private db: Database;
  private ref: DatabaseReference;
  public mensajes: any[] = [];

  constructor() {
    initializeApp(environment.firebaseConfig);
    this.db = getDatabase();
    this.ref = ref(this.db, '/');

    onValue(this.ref, (snapshot) => {
      this.mensajes = []
      snapshot.forEach((childSnapshot) => {
        this.mensajes.push(childSnapshot.val());
        console.log(childSnapshot.val());
      });
      //this.mensajes.reverse();
    }, {
      onlyOnce: false
    });
   }


   enviarMensaje(_from: string, _message: string) {
    const nuevoMensaje = push(this.ref); // CREA EL MENSAJE Y OBTIENE UNA CLAVE
    set(nuevoMensaje, {from: _from, message: _message, time: new Date().getTime()}); //ESCRIBE EL MENSAJE
   }
}
