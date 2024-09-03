
import Home from './routes/home/home.jsx'
import { Routes, Route } from 'react-router-dom';
import './index.scss'
import Navigation from './routes/navigation/navigation.jsx';
import Shop from './routes/shop/shop.jsx';
import SignIn from './routes/sign-in/sign-in.jsx';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} ></Route>
        <Route path='shop' element={<Shop />}></Route>
        <Route path='sign-in' element={<SignIn />}></Route>
      </Route>
    </Routes >
  )
}

export default App;
