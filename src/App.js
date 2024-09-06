
import Home from './routes/home/home.jsx'
import { Routes, Route } from 'react-router-dom';
import './index.scss'
import Navigation from './routes/navigation/navigation.jsx';
import Shop from './routes/shop/shop.jsx';
import Authentication from './routes/authentication/authentication.jsx';
import Checkout from './routes/checkout/checkout.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} ></Route>
        <Route path='shop/*' element={<Shop />}></Route>
        <Route path='auth' element={<Authentication />}></Route>
        <Route path='checkout' element={<Checkout />}></Route>
      </Route>
    </Routes >
  )
}

export default App;
