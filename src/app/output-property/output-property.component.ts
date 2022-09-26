import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss'],
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();
  /* @ViewChild('campoInput') para usar a variavel declarada localmente no template */
  @ViewChild('campoInput') campoValorInput!: ElementRef;
  /* para que o componente pai de output property "escute o evento e obtenha o novo valoro" declaramos um
  @Output() nomedeVar = new EventEmitter(); e chamamos dentro da func de evento this.mudouValor.emit({chave: this.novoValor}) */
  incrementa() {
    console.log(this.campoValorInput.nativeElement.value);
    
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({ novoValor: this.valor });
  }
  decrementa() {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({ novoValor: this.valor });
  }
  
  constructor() {

  }
  
  ngOnInit(): void {}
}
