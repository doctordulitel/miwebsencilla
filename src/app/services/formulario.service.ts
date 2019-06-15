import { Injectable } from '@angular/core';
import { Http, Headers,  } from '@angular/http';
import { formularioForm } from './../interface/formulario.interface';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  contactarfirebaseURL = 'https://miwebsencilla.firebaseio.com/contactar.json';
  private basePath = '/contactar';
  form: any;


  constructor(private firestore: AngularFirestore, private http: Http, private db: AngularFireDatabase) { }



  public nuevoContacto(contacto: formularioForm) {
    return this.firestore.collection('formularioForm').add(contacto);
    }

    public getnuevoContacto(documentId: string) {
      return this.firestore.collection('formularioForm').doc(documentId).snapshotChanges();
    }
    addTodo(newTodoName: string) {
      this.form.push({ text: newTodoName });
  }
    addShare(data) {
      const obj = this.db.database.ref(this.basePath);
      obj.push(data);
      console.log('Success');
      }

      getShares(path): Observable<any[]> {
        return this.db.list(path).valueChanges();
      }

  }
