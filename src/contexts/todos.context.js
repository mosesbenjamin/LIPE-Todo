import React, { createContext } from 'react';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';
import todosReducer from '../reducers/todos.reducer';

const defaultTodos = [
  { id: '0', task: 'Learn MongoDB', completed: false },
  { id: '1', task: 'Learn React hooks', completed: true },
  { id: '2', task: 'Learn React contexts', completed: true }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export const TodosProvider = (props)=> {
  const [todos, dispatch] = useLocalStorageReducer(
    'todos',
    todosReducer,
    defaultTodos
  );

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
