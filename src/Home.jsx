import { useQuery, gql } from "@apollo/client"
import { GET_CARDS } from "./graphql/graphql"
import { useState } from "react";
import Counter from "./Counter";
const Home = () => {



    const {loading, error, data} = useQuery(GET_CARDS);

    const cards = data?.cards ;

    const [search, setSearch] = useState('')


    if(loading) return <div><p className="text-white text-3xl text-center pt-24">Cargando...</p></div>
    if(error) return <div><p className="text-white text-2xl text-center pt-24">{error.message}</p></div>

    const filterCards = cards.filter(card => 
        card.name.toLowerCase().includes(search.toLowerCase()))


    return (
    <div className="min-h-screen flex justify-center items-center flex-col  ">
        <Counter/>
        <Link to="/create" className='bg-red-800 p-2 rounded-md text-white absolute top-16 right-10'>Crear</Link>
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