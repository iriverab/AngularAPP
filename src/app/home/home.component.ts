import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Registros : any[];
  constructor(private service:ContactoService) { }

  ngOnInit() {
    this.service.getData().subscribe(res => {
      this.Registros = res["data"];
      //console.log(this.Registros);
    });
  }

}
