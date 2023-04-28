import { useEffect } from 'react'
import './App.css'
import fetchData from './utils/api'

function App() {
  useEffect(()=>{
     fetchData("/movie/popular");
  },[])
  return (
    <>
     Hello
    </>
  )
}

export default App
