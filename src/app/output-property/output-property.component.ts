import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss'],
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();
  /* para que o componente pai de output property "escute o evento e obtenha o novo valoro" declaramos um
  @Output() nomedeVar = new EventEmitter(); e chamamos dentro da func de evento this.mudouValor.emit({chave: this.novoValor}) */
  incrementa() {
    this.valor += 1;
    this.mudouValor.emit({ novoValor: this.valor });
  }
  decrementa() {
    this.valor -= 1;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  constructor() {}

  ngOnInit(): void {}
}
