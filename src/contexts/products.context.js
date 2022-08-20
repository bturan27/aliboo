import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriessContext = createContext({
  categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setcategoriesMap] = useState({});

useEffect (() => {
  const getCategoriesMap = async () => {

    const categoryMap = await getCategoriesAndDocuments();
    console.log(categoryMap)

  }
  getCategoriesMap();
}, [] );

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};