import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";
import { HeaderDetailsStyled } from "../style/detailsRestaurant/headerDetails"
import { CaretLeft } from 'phosphor-react';
import Logo from "../images/logo.png"
// import { useAppContext } from "../context/hook";


function HeaderDetails() {
  const navigate = useNavigate();
  const { restaurant } = useContext(Context);

  return (
    <HeaderDetailsStyled>
      <button onClick={() => navigate('/restaurants')}>
        <CaretLeft size={10} />
        <h2>Voltar</h2>
      </button>
      <div className="banner">
        <img src={Logo} alt="" />
        <div className="banner-text">
          <h1>{ restaurant.name }</h1>
          <p>{ restaurant.telephone }</p>
          <p>{ restaurant.website }</p>
        </div>
      </div>
    </HeaderDetailsStyled>
  )
}

export default HeaderDetails;
