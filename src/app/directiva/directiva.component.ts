import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaComponentes: string[] = [ 'Ordenar', 'Preguntas ', 'Opcion Multiple', ];

  habilitar: boolean = true;
  public headComp: any ={head:'Lista Componentes'};
  constructor() { }

  setHabilitar(): void {
    this.habilitar = (this.habilitar==true)? false: true;
  }

}
