import { useQuery, gql } from "@apollo/client"
import { GET_CARDS } from "./graphql/graphql"
import { useState } from "react";

import { Link } from "react-router-dom";
const Home = () => {



    const {loading, error, data} = useQuery(GET_CARDS);

    const cards = data?.cards ;

    const [search, setSearch] = useState('')

      const [player1, setPlayer1] = useState(20)
  const [player2, setPlayer2] = useState(20)


    if(loading) return <div><p className="text-white text-3xl text-center pt-24">Cargando...</p></div>
    if(error) return <div><p className="text-white text-2xl text-center pt-24">{error.message}</p></div>

    const filterCards = cards.filter(card => 
        card.name.toLowerCase().includes(search.toLowerCase()))


    return (
    <div className="min-h-screen flex justify-center items-center flex-col  ">
        
        <div className=' w-full text-center  flex rounded-md' >
    <div className='text-white font-semibold w-6/12  h-full rounded-l-md bg-[url(https://cdna.artstation.com/p/assets/images/images/050/140/548/large/wild-blue-studios-wild-blue-408053-mtg-preordainedsight-mitchellmalloy-01-lo.jpg?1654145548)]  bg-contain ring-1 ring-black'>
      <div className='backdrop-blur-sm'>
        <p className='font-semibod font-mono text-2xl '>Agua </p>
    <p className=' text-8xl font-bold '>{player1}</p>
      </div>
      
    <div className='w-full'>
      <button className='bg-green-700 p-2  text-white w-full text-2xl' onClick={()=> setPlayer1(player1 + 1) }>+</button>
      
      <button className='text-3xl p-2 bg-red-800 text-white w-full  ' onClick={() => setPlayer1(player1 - 1)}>-</button>
    </div>
    </div>
  <div className=' ring-2 ring-black bg-[url(https://wallpaper-house.com/data/out/11/wallpaper2you_470370.jpg)] bg-contain text-black w-6/12 rounded-r-md  font-semibold '>
    <div className='backdrop-blur-sm text-white'>
       <p className='text-2xl font-mono font-semibold'>Pantano </p>
    <p className=' text-8xl font-bold'>{player2}</p>
    </div>
     
       <div className=''>
      <button className='bg-green-700 p-2  text-white w-full text-2xl' onClick={()=> setPlayer2(player2 + 1)}>+</button>
      
      <button className='text-3xl p-2 bg-red-800  text-white w-full  ' onClick={() => setPlayer2(player2 - 1)}>-</button>
    </div>
 <button className='absolute top-52 px-2 py-1 left-0 bg-yellow-600 text-white  rounded-full ' onClick={() => setPlayer1(player1 - 5)}>-5</button>
     <button className='absolute top-52 px-2 py-1 right-0 bg-yellow-600 text-white rounded-full' onClick={() => setPlayer2(player2 - 5)}>-5</button>
  </div>
   </div>
      
       
        <Link to="/create" className='bg-red-800 p-1 rounded-md text-white absolute top-80 right-0 text-sm'>Crear</Link>
        <h1 className="mb-2 font-semibold text-3xl text-white">Buscar carta</h1>
        <input type="text" className="bg-white rounded-md px-6 py-1 mb-8 text-black focus:ring-2 focus:ring-red-800 focus:outline-none" placeholder="Nombre de la carta.." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
            <div className="flex flex-col gap-10">

           
            {
                filterCards.map((item, index) => (
                    <div key={index} className=" p-8 font-semibold bg-white text-black rounded-lg ">
                        <h2 className="text-2xl mb-5">{item.name}</h2>
                        <p className="">{item.description}</p>
                        <p className="flex justify-end px-2 py-1 border max-w-min rounded-lg bg-gray-400  text-xl">{item.points}</p>
                    </div>

                ))
            }
    </div> </div>
    )
}

export default Home