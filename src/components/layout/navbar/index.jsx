import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <ul>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/tareas'>Lista de tareas</Link></li>
        <li><Link to='/pokefinder'>Pokefinder</Link></li>
    </ul>
  )
}
