import React, {useState} from 'react'
import './todo.css'

export default function Todo() {

  const [tareas, setTareas] = useState([])

  function agregarALista(nuevaTarea){
    if(!nuevaTarea.trim()) return
    setTareas((tareas) => tareas = [...tareas, nuevaTarea])
  }

  const [nuevaTarea, setNuevaTarea] = useState('')

  console.log(tareas)

  return (
    <>
        <input type='text' placeholder='Escribi una tarea' value={nuevaTarea} onChange={(event) => setNuevaTarea(event.target.value)}/>
        <button  onClick={() => agregarALista(nuevaTarea)}>Agregar tarea a la lista</button>
        <button onClick={() => setTareas([])}>Vaciar la lista</button>

        <ol>
          { tareas.map(tarea => <li key={tarea}>{tarea}</li>)
          }
        </ol>
    </>
  )
}
