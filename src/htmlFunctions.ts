import { Todo } from './models/Todo';
import { removeTodo, toggleTodo } from './todos';

export const createHtml = (todos: Todo[]) => {
  const ul = document.getElementById('todos');

  if (ul) {
    ul.innerHTML = '';
  }

  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement('li');
    const button = document.createElement('button');

    li.innerHTML = todos[i].text;
    button.innerHTML = 'Ta bort';
    if(todos[i].done){
      li.className = 'done';
    }
    else {
      li.className = 'red';
    }

    button.addEventListener('click', () => {
      removeTodo(i, todos);
      createHtml(todos);
    });
    li.addEventListener('click',() =>{
      toggleClassName(todos,li)
    })

    ul?.appendChild(li);
    li?.appendChild(button);
  }
};

export function toggleClassName(todos:Todo[],li:HTMLLIElement){

  for (let i = 0; i < todos.length; i++) {
  toggleTodo(todos[i])

  if(todos[i].done){
    li.className = 'done';
  }
  else {
    li.className = 'red';
  }

  //console.log(li.className);
  createHtml(todos);
  }
}
