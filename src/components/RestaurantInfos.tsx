import { useContext } from "react";
import Context from "../context/Context";
import { RestaurantInfosStyled } from "../style/detailsRestaurant/restaurantInfos"

function RestaurantInfos() {
  const { restaurant } = useContext(Context)

  return (
    <RestaurantInfosStyled>
      <h2>Descrição</h2>
      <p>{ restaurant.description }</p>
      <h2>Taixa de preço</h2>
      <p>{ restaurant.price_range }</p>
      <hr/>
      <h2>Horário de funcionamento</h2>
      <p>{ restaurant.opening_hours }</p>
      <h2>Formas de pagamento</h2>
      <p>{ restaurant.payment_methods }</p>
    </RestaurantInfosStyled>
  )
}

export default RestaurantInfos;
