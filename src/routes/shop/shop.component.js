import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import { useDispatch } from 'react-redux';
import './shop.styles.scss';

import Category from '../category/category.component'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { setCategories } from '../../store/categories/categories.action';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(()=> {
    const getCategoriesMap = async() =>{
      const categories = await getCategoriesAndDocuments('collections');
      dispatch (setCategories(categories));
    }
    getCategoriesMap();
  }, [])


  return (
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path =':category' element={<Category />} />
      </Routes>
  );
};

export default Shop;