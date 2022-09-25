import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss']
})
export class InputPropertyComponent implements OnInit {
  // para passar uma propriedade no angular colocamos @Input() antes com abaixo
  // para mudar o nome da variavel externa mente coloca-se param em @Input('nomedesejado')
  // tambem podemos declarar como metadado de @Component({}) input: []
  // 
  @Input('nome') nomeCurso: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
