import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../contacto.service'; //Servicio contacto en el cual estan las llamadas de la api
import { contact } from '../model/contacts'; // modelo contacto para mapear lo que viene en la api

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Registros: contact[];
  public seleccion: contact;
  /*Inyectamos servicio para consumir api*/
  constructor(private service: ContactoService) { }

  ngOnInit() {
    /*Cargamos la data*/
    this.cargarData();
  }

  cargarData() {
    this.seleccion = null;
    /*Obtenemos la data de la api desde el servicio definido */
    this.service.getData().subscribe(res => {
      this.Registros = res["data"];
    });
  }

  /*Solo definimos la variable de paso que dice si existe la variable o no--recuerda todo trabaja en el acto en angular*/
  Nuevo() {
    this.seleccion = new contact(); //seteado de variable para esconder listado
  }

  Editar(data: contact) {
    this.seleccion = data;//seteado de variable para esconder listado
  }

  Eliminar(data: contact) {
    if (confirm("Esta seguro de eliminar este Registro?"))
      //  Llamada a servicio para eliminar desde la api
      this.service.Eliminar(data).subscribe(res => {
        alert("Registro Grabado correctamente!");
        this.cargarData();
      });
    else
      alert("Muy sabia determinación");
  }

  Terminar() {
    //Limpiamos variable, mostramos el listado y mandamos mensaje
    this.seleccion = null;
    this.cargarData();
    alert("Grabado Correctamente!");
  }

}
