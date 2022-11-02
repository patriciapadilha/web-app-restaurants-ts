import styled from "styled-components";
import styleguide from "../styleguide";
import Banner from "../../images/space1.png"

export const HeaderDetailsStyled = styled.header `
  height: 187px;
  background-image: url(${Banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 30px;

  .banner {
    position: absolute;
    width: 400px;
    left: calc(47% - 398px/2 + 72px);
    top: 40px;
  }

  .banner-text {
    position: absolute;
    left: calc(65% - 398px/2 + 72px);
    top: 0;
  }

  img {
    position: relative;
  }

  h1 {
    color: ${styleguide.colors.white};
    font-size: ${styleguide.fontSize.h1};
    margin-top: 12px;
    font-weight: 700;
    line-height: 140%;
  }

  p {
    color: ${styleguide.colors.white};
    font-size: ${styleguide.fontSize.p};
    margin: 5px auto 8px;
    font-weight: 400;
    line-height: 21px;
    
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 5px;
    background-color: transparent;
    border: none;

    position: absolute;
    width: 68px;
    height: 24px;
    left: calc(20% - 398px/2 + 72px);
    top: 45px;
    color: ${styleguide.colors.white};
  }

  h2 {
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
  }

`