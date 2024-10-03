
import Home from './routes/home/home.jsx'
import { Routes, Route } from 'react-router-dom';
import './index.scss'
import Navigation from './routes/navigation/navigation.js';
import Shop from './routes/shop/shop.jsx';
import Authentication from './routes/authentication/authentication.jsx';
import Checkout from './routes/checkout/checkout.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth
} from "./utils/firebase/firebase.js";
import { setCurrentUser } from './store/user/userAction.js';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;

  }, [dispatch])
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />}></Route>
        <Route path='auth' element={<Authentication />}></Route>
        <Route path='checkout' element={<Checkout />}></Route>
      </Route>
    </Routes >
  )
}

export default App;
