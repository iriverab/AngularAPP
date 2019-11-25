import { Component, OnInit } from '@angular/core';
import { Input,Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Input() contact;
  @Output() salida = new EventEmitter();

  Respuesta ;

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    gender: new FormControl('',Validators.required),
    email:new FormControl('', Validators.email),
    phone:new FormControl('')
  });

  constructor(private service : ContactoService) { }

  ngOnInit() {
 if(this.contact)
 {
   this.profileForm.value.name = this.contact.name;
 }
  }

  onSubmit()
  {

    //console.log(this.profileForm.value.name);
    this.service.Actualizar(this.contact).subscribe(res => {
      this.Respuesta = res;
      this.salida.emit();
      //console.log(this.Respuesta);
    });
    //console.log(this.contact);
    this.salida.emit();
  }

}
