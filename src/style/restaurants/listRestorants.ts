import styled from "styled-components"
import styleguide from "../styleguide";
import Space1 from "../../images/space1.png"
import Space2 from "../../images/space2.png"

export const ListRestaurantsStyled = styled.main `
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${styleguide.colors.darkDown};
    font-size: ${styleguide.fontSize.h2};
    margin: 30px 0;
    align-self: flex-start;
  }

  p {
    width: 170px;
    color: ${styleguide.colors.lightDown};
    font-size: ${styleguide.fontSize.p};
    font-weight: 400;
    line-height: 140%;
    text-align: right;
  }

  strong {
    color: ${styleguide.colors.darkDown};
    font-size: ${styleguide.fontSize.h4};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 740px;
  }
  
  a {
    text-decoration: none;
    cursor: pointer;
    width: 350px;
    height: 170px;
    margin-bottom: 30px;
    background: url(${Space2});
    background-position: center;
    border-radius: 8px;
  }

  a:nth-child(3n+1) {
    background: url(${Space1});
    background-position: center;
    border-radius: 8px;
  }

  h2 {
    position: absolute;
    color: ${styleguide.colors.white};
    font-size: ${styleguide.fontSize.h5};
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin: 140px 0 0 10px;
  }
  
  section {
    width: 350px;
    height: 170px;
    margin-bottom: 30px;
  }

`