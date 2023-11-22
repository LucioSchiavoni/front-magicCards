import React from 'react'
import { Link } from 'react-router-dom'

const CreateCard = () => {
  return (

    <div>
        <Link to='/' className="absolute left-5 top-5 bg-red-800 px-4 py-1 rounded-lg text-white ">Inicio</Link>
        <p>Crear</p>
    </div>
  )
}

export default CreateCard