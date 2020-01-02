import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from '../../app.reducers';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  //@Input() contador: number;
  @Output() cambioContador: EventEmitter<number> = new EventEmitter<number>();

  public contador: number;

  constructor(public store: Store<appState>) {
    this.store.select('contador').subscribe((contador: any) => {
      this.contador = contador;
    });
  }

  ngOnInit() {

  }



  reset() {
    //this.contador = 0;
    //this.cambioContador.emit(this.contador);
    let accion = new ResetAction();
    this.store.dispatch(accion);
  }

}
