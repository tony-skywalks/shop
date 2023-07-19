import {Routes,Route} from 'react-router-dom'
import Home from './routes/home/home.component'
import Nav from './routes/nav/nav.component'
import SignIn from './routes/signin/signin.component'

const Shop = () => {
  return (
    <h1>
      shop page
    </h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index={true} element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App;
