import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from '../../app.reducers';
import { MultiplicarAction, DividirAction, actions } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  //@Input() contador: number;
  @Output() cambioContador = new EventEmitter<number>();

  public contador: number;

  constructor(private store: Store<appState>) {
    this.store.select('contador').subscribe((contador: any) => {
      this.contador = contador;
    });
  }

  ngOnInit() {
  }


  multiplicar() {
    //this.contador *= 2;
    //this.cambioContador.emit(this.contador);
    const accion = new MultiplicarAction(5);
    this.store.dispatch(accion);

  }

  dividir() {
    //this.contador /= 2;
    //this.cambioContador.emit(this.contador);
    const accion = new DividirAction(5);
    this.store.dispatch(accion);
  }

  resetNieto(nuevoContador: number) {
    this.contador = nuevoContador;
    //this.cambioContador.emit(this.contador);
  }

}
