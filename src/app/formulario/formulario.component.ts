import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Input() contact; // Input contacto con el contenido de la varibale pasada desde quien invoca
  @Output() salida = new EventEmitter(); //evento que gatillara el emitter.

  Respuesta;
  //Definimos el formulario reactivo para luego validar el submit
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('')
  });

  constructor(private service: ContactoService) { }

  ngOnInit() {
    // if (this.contact) {
    //   this.profileForm.value.name = this.contact.name;
    // }
  }

  onSubmit() {
    //si existe contacto id solo actualizamos en caso diferente realizamos el insert mediante la api
    //this.salida.emit(); este comando envia un emitter para que la pagina que invoco el componente
    //sepa que debe realizar dicha accion
    if (this.contact._id) {
      this.service.Actualizar(this.contact).subscribe(res => {
        this.Respuesta = res;
        this.salida.emit();
      });
    }
    else {
      this.service.Ingresar(this.contact).subscribe(res => {
        this.Respuesta = res;
        this.salida.emit();
      });
    }
  }

}
