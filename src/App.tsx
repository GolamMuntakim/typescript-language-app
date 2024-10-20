import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import {lazy, Suspense} from 'react';
import Loader from './Components/Loader';
const Home = lazy(()=>import("./Components/Home"))
const Learning = lazy(()=>import("./Components/Learning"))
const Quize = lazy(()=>import("./Components/Quize"))
const Result = lazy(()=>import("./Components/Result"))
const Login = lazy(()=>import("./Components/Login"))

function App() {
  return (
  <Router>
    <Header></Header>
   <Suspense fallback={<Loader></Loader>}>
   <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/learn' element={<Learning/>}/>
      <Route path='/quize' element={<Quize/>}/>
      <Route path='/result' element={<Result/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
   </Suspense>
  </Router>
  )
}

export default App
