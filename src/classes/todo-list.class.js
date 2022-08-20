import { Todo } from "./todo.class";

export class TodoList {
    todos = [];

    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage()
    }

    eliminarTodo( id ) {
        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage()
    }

    marcarCompletado( id ) {
        
        for( let todo of this.todos ) {

            if( todo.id == id ) {

                todo.completado = !todo.completado;
                this.guardarLocalStorage()
                break;

            }

        }

    }

    eliminarCompletados() {
        
        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();

    }

    guardarLocalStorage() {

        localStorage.setItem( "TodoList", JSON.stringify( this.todos ) );

    }

    cargarLocalStorage() {

        const todosLS = localStorage.getItem("TodoList");

        if( todosLS ) {
            this.todos = JSON.parse( todosLS );
            this.todos = this.todos.map( objeto => Todo.fromJSON(objeto) );
        }
        else {
            this.todos = [];
        }

    }

}


















