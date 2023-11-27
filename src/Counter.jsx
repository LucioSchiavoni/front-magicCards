import React, { useState } from 'react'


const Counter = () => {


  const [player1, setPlayer1] = useState(20)
  const [player2, setPlayer2] = useState(20)

  return (
    
   <div className=' mt-16  w-full text-center  flex rounded-md' >
    <div className='text-white font-semibold w-6/12  h-full rounded-l-md bg-[url(https://cdna.artstation.com/p/assets/images/images/050/140/548/large/wild-blue-studios-wild-blue-408053-mtg-preordainedsight-mitchellmalloy-01-lo.jpg?1654145548)]  bg-contain ring-1 ring-black'>
      <div className='backdrop-blur-sm'>
        <p className='font-semibod font-mono text-xl '>Agua </p>
    <p className=' text-5xl font-bold '>{player1}</p>
      </div>
      
    <div className='w-full'>
      <button className='bg-green-700 p-2  text-white w-full text-2xl' onClick={()=> setPlayer1(player1 + 1) }>+</button>
      
      <button className='text-3xl p-2 bg-red-800 text-white w-full  ' onClick={() => setPlayer1(player1 - 1)}>-</button>
    </div>
    </div>
  <div className=' ring-2 ring-black bg-[url(https://wallpaper-house.com/data/out/11/wallpaper2you_470370.jpg)] bg-contain text-black w-6/12 rounded-r-md  font-semibold '>
    <div className='backdrop-blur-sm text-white'>
       <p className='text-xl font-mono font-semibold'>Pantano </p>
    <p className=' text-5xl font-bold'>{player2}</p>
    </div>
     
       <div className=''>
      <button className='bg-green-700 p-2  text-white w-full text-2xl' onClick={()=> setPlayer2(player2 + 1)}>+</button>
      
      <button className='text-3xl p-2 bg-red-800  text-white w-full  ' onClick={() => setPlayer2(player2 - 1)}>-</button>
    </div>
 <button className='absolute top-52 px-2 py-1 left-0 bg-yellow-600 text-white  rounded-full ' onClick={() => setPlayer1(player1 - 5)}>-5</button>
     <button className='absolute top-52 px-2 py-1 right-0 bg-yellow-600 text-white rounded-full' onClick={() => setPlayer2(player2 - 5)}>-5</button>
  </div>
   </div>
   
        
  )
}

export default Counter