import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filtro/filtro.actions';
import { limpiarCompletado } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual:actions.filtrosValidos='todos';
  filtros:actions.filtrosValidos[]=['todos','completados','pendientes'];
  pendientes:number=0;
  
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state=>{
      this.filtroActual=state.filtro;
      this.pendientes=state.todos.filter(filtro=>!filtro.completado).length;
    });
  }

  cambiarFiltro(filtro:actions.filtrosValidos){
    this.store.dispatch(actions.setFiltro({filtro}));
  }

  limpiarCompletado(){
    this.store.dispatch(limpiarCompletado());
  }

}
