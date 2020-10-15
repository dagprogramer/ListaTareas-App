import { createAction, props } from '@ngrx/store';

export const crear = createAction('[Todo] Crea Todo',
props<{texto:string}>());

export const toggle=createAction('[Todo] Toggle Todo',
props<{id:number}>());

export const editar=createAction('[Todo] Editar Todo',
props<{id:number,texto:string}>());

export const eliminar=createAction('[Todo] Eliminar Todo',
props<{id:number}>());

export const toggleAll=createAction('[Todo] ToggleAll Todo',
props<{completado:boolean}>());

export const limpiarCompletado=createAction('[Todo] ToggleAll Todo');