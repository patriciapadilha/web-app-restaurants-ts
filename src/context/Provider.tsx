import * as React from 'react';
import { useState } from 'react';
import { ContextType, IProps, IRestaurant } from '../interfaces/context';
import Context from './Context';

const ContextProvider = ({ children }: IProps) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [restaurant , setRestaurant] = useState({} as IRestaurant)
  const [searchByName , setSearchByName] = useState("")

  const ProviderValue: ContextType = {
    allRestaurants,
    setAllRestaurants,
    filterRestaurants,
    setFilterRestaurants,
    restaurant, 
    setRestaurant,
    searchByName,
    setSearchByName,
  }
  
  return (
    <Context.Provider value={ ProviderValue }>
      { children }
    </Context.Provider>
  );
}

export default ContextProvider;