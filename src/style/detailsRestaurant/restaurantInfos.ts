import styled from "styled-components";
import styleguide from "../styleguide";

export const RestaurantInfosStyled = styled.main `
  width: 539px;
  margin: 0 auto;

  h2 {
    font-weight: 700;
    font-size: 14px;
    line-height: 33px;
    color: ${styleguide.colors.darkDown};
  }

  p:first-of-type {
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${styleguide.colors.dark};
    margin-bottom: 20px;
  }

  hr {
    height: 1px;
    margin: 10px 0 30px;
    color: ${styleguide.colors.light};
  }

`