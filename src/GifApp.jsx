import { useState } from 'react';
import { GifGrid, AddCategory } from './components';

export const GifApp = () => {

  const [categories, setCategories] = useState(['One']);

  const onAddCategory = ( newCategory ) => {

    if ( categories.includes( newCategory ) ) return;

    setCategories([ newCategory, ...categories ]);
  };


  return (
    <>
      <h1>Gif App React</h1>

      <AddCategory onNewCategory={ onAddCategory } />

      {
        categories.map( category  => (
          <GifGrid
            key={category} 
            category={category}
          />
        ))
      }
    </>
  );
};