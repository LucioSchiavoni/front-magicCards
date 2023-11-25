import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import './App.css'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateCard from './CreateCard'
import Counter from './Counter'


function App() {
  

  const client = new ApolloClient({
    uri:import.meta.env.VITE_URI,
    cache: new InMemoryCache(),
   
  })

  return (
    <> 
     <BrowserRouter>
      <ApolloProvider client={client}>
    <Routes>
     
      <Route path='/' element={<Home/>}/>   
      <Route path='/create' element={<CreateCard/>}/>
     <Route path='/counter' element={<Counter/>}/>
    </Routes>
   </ApolloProvider>
    
  
        </BrowserRouter>
    </>
  )
}

export default App
