// import { useEffect } from 'react'
import './App.css'
import {Routes,Route ,BrowserRouter as Router} from 'react-router-dom'
// import fetchData from './utils/api'
// import { useDispatch,useSelector} from 'react-redux'
// import { getURL } from './store/slices/homePage';
import Navbar from './components/Navbar'
import Error from './pages/404/Error'
import Details from './pages/details/Details'
import Explore from './pages/explore/Explore'
import HomePage from './pages/homepage/HomePage'
import Searchresult from './pages/searchresult/Searchresult'
import Footer from './components/Footer'
function App() {
  return (
    <>
     <Router>
     <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/:showtype/:id' element={<Details/>}/>
        <Route path='search/:input' element={<Searchresult/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='explore/:showtype' element={<Explore/>}/>
      </Routes>
      <Footer/>
     </Router>
    </>
  )
}

export default App
