import { Route, BrowserRouter, Routes } from 'react-router-dom';
import DetailsRestaurant from "./pages/DetailsRestaurant"
import Restaurants from "./pages/Restaurants"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/restaurants/:id" element={ <DetailsRestaurant /> } />
        <Route path="/restaurants" element={ <Restaurants /> } />
        <Route path="/" element={ <Restaurants /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;