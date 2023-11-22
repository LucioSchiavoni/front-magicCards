import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import './App.css'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateCard from './CreateCard'

function App() {
  

  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
   
  })

  return (
    <> 
     <BrowserRouter>
      <ApolloProvider client={client}>
    <Routes>
       
      <Route path='/' element={<Home/>}/>   
      <Route path='/create' element={<CreateCard/>}/>
    </Routes>
   </ApolloProvider>
    
  
        </BrowserRouter>
    </>
  )
}

export default App
