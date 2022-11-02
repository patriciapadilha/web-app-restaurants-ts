import { useContext, useEffect } from "react";
import HeaderDetails from "../components/HeaderDetails";
import RestaurantInfos from "../components/RestaurantInfos";
import Context from "../context/Context";
import { getRestaurantById } from "../services/api"

function DetailsRestaurant() {
  const { setRestaurant } = useContext(Context)

  const api = async () => {
    const id = (window.location.pathname).split("/")
    const results = await getRestaurantById(Number(id[2]));
    setRestaurant(results.data);
  }
  
  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <HeaderDetails />
      <RestaurantInfos />
    </>
  )
}

export default DetailsRestaurant;