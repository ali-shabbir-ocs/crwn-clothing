import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Category from '../category/category';
import CategoriesPreview from '../categories-preview/categories-preview';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import { setCategories } from '../../store/categories/categoryAction';
import { useDispatch } from 'react-redux';
import './shop.scss'
const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments();

            dispatch(setCategories(categoriesArray));
        };
        getCategoriesMap();
    }, [dispatch]);
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
}
export default Shop;