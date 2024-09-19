import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Category from '../category/category';
import CategoriesPreview from '../categories-preview/categories-preview';
import { fetchCategoriesAsync } from '../../store/categories/categoryAction';
import { useDispatch } from 'react-redux';
import './shop.scss'
const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategoriesAsync());
    }, [dispatch]);
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
}
export default Shop;