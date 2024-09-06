
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview';
import './shop.scss'
const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />}>

            </Route>
        </Routes>
    );
}
export default Shop;