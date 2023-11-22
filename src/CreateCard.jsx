import React from 'react'
import { Link } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'
import { useFormik } from 'formik';

const CREATE_CARD_MUTATION = gql`
mutation createCard($name: String!, $description: String!, $points: String!){
  createCard(create: {
    name: $name
    description: $description
    points: $points
  }) {
    name 
    description
    points
  }
}
`;

const CreateCard = () => {

const [createCardMutation] = useMutation(CREATE_CARD_MUTATION)


  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      points: '',
    },

    onSubmit: async (values) => {
        try {
          console.log(values)
          const {data} = createCardMutation({
            variables: values
          })
          

        } catch (error) {
          console.log(error)
        }
    }
  })


  return (

    <div>
        <Link to='/' className="absolute left-5 top-5 bg-red-800 px-4 py-1 rounded-lg text-white ">Inicio</Link>
        <form onSubmit={formik.handleSubmit} method='POST' className='mt-24 p-6 bg-white rounded-md space-y-10'>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-black'>Nombre de la carta</label>
            <input type="text" id='name' className='px-3 py-1 text-black placeholder:italic rounded-md bg-gray-100 ring-2 ring-red-800 focus:outline-none' value={formik.values.name} onChange={formik.handleChange} placeholder='Nombre' required/>
          </div>
          <div className='flex flex-col'>
             <label htmlFor="" className='text-black'>Descripcion</label>
            <textarea type="text" id='description' className='px-3 py-1 text-black placeholder:italic rounded-md bg-gray-100 ring-2 ring-red-800 focus:outline-none' placeholder='Descripcion de la carta' value={formik.values.description} onChange={formik.handleChange} required></textarea>
          </div>
          <div className='flex flex-col'>
             <label htmlFor="" className='text-black'>Puntos</label>
            <input type="text" id='points' className='px-3 py-1 text-black placeholder:italic rounded-md bg-gray-100 ring-2 ring-red-800 focus:outline-none' value={formik.values.points} placeholder='Puntos' onChange={formik.handleChange} required/>
          </div>
          <button className='px-6 py-1 rounded-md bg-red-800 text-white text-xl' type='submit'>Guardar</button>
        </form>
    </div>
  )
}

export default CreateCard