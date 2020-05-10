import React from 'react';
import { TodosProvider } from '../contexts/todos.context';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import 'tachyons';

const TodoApp = ()=> {
  return (
    <TodosProvider>
      <article className="shadow-10 center  br3 pa3 pa4-ns mv3 ba b--black-10 bg-white">
	      <TodoForm />
	      <TodoList />
      </article>
    </TodosProvider>
  );
}

export default TodoApp;
