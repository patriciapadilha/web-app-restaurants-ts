import React from "react";

export interface IProps {
  children: React.ReactNode;
}

export interface IRestaurant {
  id: string;
  name: string;
  image: string;
  logo: string;
  description: string;
  telephone: string;
  price_range: string;
  payment_methods: string;
  website: string;
  opening_hours: string;
}

export type ContextType = {
  allRestaurants: IRestaurant[];
  filterRestaurants: IRestaurant[];
  restaurant: IRestaurant;
  searchByName: string;
  setAllRestaurants: React.Dispatch<React.SetStateAction<never[]>>;
  setFilterRestaurants: React.Dispatch<React.SetStateAction<any>>;
  setRestaurant: React.Dispatch<React.SetStateAction<any>>;
  setSearchByName: React.Dispatch<React.SetStateAction<string>>;
};