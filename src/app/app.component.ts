import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import { appState } from './app.reducers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';
  public contador: number;

  constructor(private _store: Store<appState>) {
    /* this.contador = 0; */
    this._store.select('contador').subscribe(contador => {
      console.log(contador);
      this.contador = contador;
    });
  }

  incrementar() {
    const accion = new IncrementarAction();
    this._store.dispatch(accion);
  }

  decrementar() {
    this._store.dispatch(new DecrementarAction());
  }
}
