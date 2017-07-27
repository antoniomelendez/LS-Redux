import { combineReducers } from 'redux';
import Todos from './todos';
import ActiveTodo from './active-todo';

const allReducers = combineReducers({
  todos: Todos,
  activeTodo: ActiveTodo
});

export default allReducers;
