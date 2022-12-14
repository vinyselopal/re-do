import { useState } from 'react' // divide into components
import { updateTodo, deleteTodo } from '../DB.js'

function Todo ({ todo, updateTodos, todos}) {

  function deleteTodoInList () {
    const newTodos = todos.filter(a => a.key !== todo.key)
    updateTodos(newTodos)
  }

  console.log(todo)

  return (
    <li>
      <div className='visible'>
        <p className='savedTask'>
          <input
            className='todoContentBar'
            spellCheck='false'
            value={todo.content}
            onChange={(e) => {
              updateTodo(todo.key, 'content', e.target.value)
              const newTodo = { ...todo, content: e.target.value }
              const slicedTodos = todos.filter(a => a.key !== todo.key)
              const newTodos = [...slicedTodos, newTodo].sort((a, b) => a - b)
              updateTodos(newTodos)
            }}
          />
        </p>
        <input
          type='checkbox'
          className='strike'
          checked={todo.done}
          onChange={(e) => {
            updateTodo(todo.key, 'done', e.target.checked)
            const newTodo = { ...todo, done: e.target.checked }
            const slicedTodos = todos.filter(a => a.key !== todo.key)
            const newTodos = [...slicedTodos, newTodo].sort((a, b) => a.key - b.key) // name key as id
            updateTodos(newTodos)
          }}
        />
        <input
          type='button'
          className='expandTodoButton'
          onClick={() => {
            const newTodo = { ...todo, expanded: !todo.expanded }
            const slicedTodos = todos.filter(a => a.key !== todo.key)
            const newTodos = [...slicedTodos, newTodo].sort((a, b) => a.key - b.key) // name key as id
            updateTodos(newTodos)
          }}
          value='v'
        />
      </div>
      <div className='hidden' style={{ display: todo.expanded ? 'flex' : 'none' }}>
        <div className='leftHidden'>
          <textarea
            className='notes' value={todo.notes} onChange={(e) => {
              updateTodo(todo.key, 'notes', e.target.value)
              const newTodo = { ...todo, content: e.target.value }
              const slicedTodos = todos.filter(a => a.key !== todo.key)
              const newTodos = [...slicedTodos, newTodo].sort((a, b) => a - b)
              updateTodos(newTodos)
            }}
          />
        </div>
        <div className='rightHidden'>
          <input
            type='date' className='date' value={todo.date} onChange={(e) => {
              updateTodo(todo.key, 'date', e.target.value)
              const newTodo = { ...todo, content: e.target.value }
              const slicedTodos = todos.filter(a => a.key !== todo.key)
              const newTodos = [...slicedTodos, newTodo].sort((a, b) => a - b)
              updateTodos(newTodos)
            }}
          />
          <select
            className='priority' value={todo.priority} onChange={(e) => {
              updateTodo(todo.key, 'priority', e.target.value)
              const newTodo = { ...todo, content: e.target.value }
              const slicedTodos = todos.filter(a => a.key !== todo.key)
              const newTodos = [...slicedTodos, newTodo].sort((a, b) => a - b)
              updateTodos(newTodos)
            }}
          >
            <option value='none'>none</option>
            <option value='low'>low</option>
            <option value='medium'>medium</option>
            <option value='high'>high</option>
          </select>
          <input
            type='button' value='delete' className='delete' onClick={(e) => {
              deleteTodo(todo.key)
              deleteTodoInList()
            }}
          />
        </div>
      </div>

    </li>
  )
}

export default Todo
