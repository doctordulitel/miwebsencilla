import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularioprueba',
  templateUrl: './formularioprueba.component.html',
  styleUrls: ['./formularioprueba.component.css']
})

export class FormulariopruebaComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private af: AngularFireDatabase) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    const {name, email, message} = this.form.value;
    const date = Date();
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;

    const formRequest = { name, email, message, date, html };

    this.af.database.list('/contactar').push(formRequest);
    this.form.reset();
  }
}
