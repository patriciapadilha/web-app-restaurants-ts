import Search from "./Search"
import { HeaderMain } from "../style/restaurants/header"
import { useContext } from "react";
import Context from "../context/Context";

function Header() {
  const { searchByName } = useContext(Context);
  return (
    <HeaderMain>
      { searchByName.length === 0 &&
        <div>
          <h1>Descubra novos sabores</h1>
          <p>Aqui eu converso com você sobre nossa proposta</p>
        </div>
      }
      <Search />
    </HeaderMain>
  )
}

export default Header;