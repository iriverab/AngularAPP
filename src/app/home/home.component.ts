import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../contacto.service';
import { contact } from '../model/contacts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Registros : contact[];
  public seleccion : contact;
  constructor(private service:ContactoService) { }

  ngOnInit() {
    this.seleccion = null;
    this.service.getData().subscribe(res => {
      this.Registros = res["data"];
      //console.log(this.Registros);
    });
  }

  Editar(data:contact)
  {
    this.seleccion = data;
  }

  Terminar()
  {
    this.seleccion=null;
    alert("Grabado Correctamente!");
  }

}
