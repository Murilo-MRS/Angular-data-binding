import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.scss'],
})
export class MeuFormComponent implements OnInit {
  nome: string = '';

  pessoa: any = {
    nome: 'def',
    idade: 20,
  };

  constructor() {}

  ngOnInit(): void {}
}
