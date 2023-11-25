import React, { useState } from 'react'


const Counter = () => {


  const [player1, setPlayer1] = useState(20)
  const [player2, setPlayer2] = useState(20)

  return (
    
   <div className='bg-white  text-center  mt-4  m-auto flex rounded-md' >
    <div className='text-black font-semibold w-6/12   rounded-l-md '>
      <p>Agua </p>
    <p className=' text-2xl'>{player1}</p>
    <div className=''>
      <button className='bg-green-700 rounded-md text-white w-full text-2xl' onClick={()=> setPlayer1(player1 + 1) }>+</button>
      
      <button className='text-3xl bg-red-800 text-white w-full rounded-md ' onClick={() => setPlayer1(player1 - 1)}>-</button>
    </div>
    </div>
  <div className='bg-white  text-black w-6/12 rounded-r-md  font-semibold '>
      <p>Pantano </p>
    <p className=' text-2xl'>{player2}</p>
       <div className=''>
      <button className='bg-green-700 rounded-md text-white w-full text-2xl' onClick={()=> setPlayer2(player2 + 1)}>+</button>
      
      <button className='text-3xl bg-red-800 text-white w-full rounded-md ' onClick={() => setPlayer2(player2 - 1)}>-</button>
    </div>
 <button className='absolute top-36 px-2 py-1 left-0 bg-yellow-600 text-white  rounded-full ' onClick={() => setPlayer1(player1 - 5)}>-5</button>
     <button className='absolute top-36 px-2 py-1 right-0 bg-yellow-600 text-white rounded-full' onClick={() => setPlayer2(player2 - 5)}>-5</button>
  </div>
   </div>
   
        
  )
}

export default Counter