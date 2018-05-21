import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {todos} from './todos.json';
// subcomponents
import TodoForm from './components/TodoForm';
console.log(todos);


class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  removeTodo(index){
    if (window.confirm('Are you sure you want to delete it?')){
      this.setState({
        todos: this.state.todos.filter((e, i) =>{
          return i !==index
        })
      })
    }
    
  }

  render() {
    const todos = this.state.todos.map((todo, i)=>{
      return(
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
             {todo.title}
              <span className="badge badge-pill badge-danger ml-2 " >
                
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
             <p>{todo.description}</p>
             <p><b>{todo.responsible}</b></p> 
            </div>
            <div className="card-footer">
              <button
                className="btn btn-sm btn-danger"
                onClick={this.removeTodo.bind(this, i)}
                >
                Delete
              </button>
            </div>
          </div>
        </div>
        
      )
    })

    return (
      <div className="App">

        <div className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            <b>Task List</b> - 
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length} Task
            </span>
          </a>
          <a href="" className="text-white text-right"> My first React App - Angel Mavare</a>
        </div>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
                  <img src={logo} className="App-logo" alt="logo" />
                <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>
            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
   
      </div>
    );
  }
}

export default App;
