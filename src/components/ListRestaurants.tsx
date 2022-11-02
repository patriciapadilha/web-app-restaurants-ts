import React, { useContext, useEffect } from 'react';
import { getRestaurants } from '../services/api';
import Context from '../context/Context';
import { Link, useNavigate } from 'react-router-dom';
import { ListRestaurantsStyled } from '../style/restaurants/listRestorants'

function ListRestaurants() {
  const navigate = useNavigate();
  const { filterRestaurants, setFilterRestaurants, setAllRestaurants, searchByName } = useContext(Context);

  const api = async () => {
    const results = await getRestaurants();
    setFilterRestaurants(results.data);
    setAllRestaurants(results.data);
  }
  
  useEffect(() => {
    navigate("/restaurants")
    api();
  }, []);

  return (
    <ListRestaurantsStyled>
      <div>
      <h1>Restaurantes</h1>
      { searchByName.length !== 0 &&
        <p>Resultados para <br></br><strong>{searchByName}</strong></p>
      }
        <div>
          {filterRestaurants && filterRestaurants.map((restaurant) => (
            <Link to={`/restaurants/${ restaurant.id }`} key={ restaurant.id }>
                <section>
                  <h2>{restaurant.name}</h2>
              </section>
            </Link>
            ))}
        </div>
      </div>
    </ListRestaurantsStyled>
  )
}

export default ListRestaurants;