import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

const estadoInicial = [
    {
        id: new Date().getTime(),
        description: 'Antofagasta',
        done: false
    },
    {
        id: new Date().getTime()*3,
        description: 'Copiapo',
        done: false
    }
];


export const useTodos = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, estadoInicial );

    const handNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id

        })
    }

    const bloquearRegistro = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id

        })
    }

    const contadorPendientes = (todo) => {
        const action = {
            type: '[TODO] Largo Pendientes',
            payload: todo
        }

        dispatch(action);
    }


    return{
        todos,
        handNewTodo,
        handleDeleteTodo,
        bloquearRegistro,
        contadorPendientes,
        contadorPendientes: todos.filter( todo => !todo.done ).length,
        cantidadTotal: todos.length
    }



}
 