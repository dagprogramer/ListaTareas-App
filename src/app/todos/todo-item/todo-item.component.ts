import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input()
todo:Todo;

@ViewChild('inputFisico',{ static: true }) 
txtFisico:ElementRef;

checkCompletado:FormControl;
txtEditar:FormControl;
editando:boolean=false;

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.iniciarForms();
    this.escucharCambiosCheckCompletado();
  }

  iniciarForms(){
    this.checkCompletado=new FormControl(this.todo.completado);
    this.txtEditar=new FormControl(this.todo.texto,Validators.required);
  }

  editar(){
    this.editando=true;
    this.txtEditar.setValue(this.todo.texto);
    setTimeout(()=>{
      this.txtFisico.nativeElement.select();
    },1)
  }

  terminarEdicion(){
    this.editando=false;
    if(this.txtEditar.invalid){return;}
    if(this.txtEditar.value === this.todo.texto){return;}
    this.store.dispatch(actions.editar({id:this.todo.id,texto:this.txtEditar.value}))
  }

  escucharCambiosCheckCompletado() {
    this.checkCompletado.valueChanges.subscribe(value=>{
      this.store.dispatch(actions.toggle({id:this.todo.id}));
    });
  }

  borrar(){
    this.store.dispatch(actions.eliminar({id:this.todo.id}));
  }

}
