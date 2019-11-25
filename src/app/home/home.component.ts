import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../contacto.service';
import { contact } from '../model/contacts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Registros: contact[];
  public seleccion: contact;
  constructor(private service: ContactoService) { }

  ngOnInit() {
    this.cargarData();
  }

  cargarData() {
    this.seleccion = null;
    this.service.getData().subscribe(res => {
      this.Registros = res["data"];
    });
  }

  Nuevo()
  {
    this.seleccion = new contact();

  }

  Editar(data: contact) {
    this.seleccion = data;
  }

  Eliminar(data: contact) {
    if (confirm("Esta seguro de eliminar este Registro?"))
      this.service.Eliminar(data).subscribe(res => {
        alert("Registro Grabado correctamente!");
        this.cargarData();
      });
    else
      alert("Muy sabia determinación");
  }

  Terminar() {
    this.seleccion = null;
    this.cargarData();
    alert("Grabado Correctamente!");
  }

}
