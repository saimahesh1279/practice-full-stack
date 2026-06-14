
import React, { useState, useEffect } from 'react'

export default function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks') || '[]')
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (!task) return
    setTasks([...tasks, { id: Date.now(), text: task, done: false }])
    setTask('')
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? {...t, done: !t.done} : t))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  return (
    <div style={{padding:20}}>
      <h2>Todo App (React Hooks + LocalStorage)</h2>

      <input value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            <span style={{textDecoration: t.done ? 'line-through' : ''}}>
              {t.text}
            </span>
            <button onClick={() => toggleTask(t.id)}>Toggle</button>
            <button onClick={() => deleteTask(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
