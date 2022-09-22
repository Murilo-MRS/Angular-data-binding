import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  // declaramos vairaveis/funcs aqui e chamamos no .html do componente para interpolaçao ou property binding
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImage: string = 'http://github.com/Murilo-MRS.png';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() {}

  ngOnInit(): void {}
}
