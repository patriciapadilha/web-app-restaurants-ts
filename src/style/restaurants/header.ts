import styled from "styled-components";
import Banner from "../../images/background.png"
import styleguide from "../styleguide";

export const HeaderMain = styled.header `
  width: 100vw;
  height: 375px;
  background: url(${Banner});
  background-repeat: repeat;
  background-position: center;
  display: flex;
  justify-content: center;

  h1 {
    width: 540px;
    color: ${styleguide.colors.blackUp};
    font-size: ${styleguide.fontSize.h1};
    font-weight: 700;
    text-align: right;
    position: absolute;
    right: 100px;
    margin: 30px auto 300px;
  }

  p {
    width: 300px;
    text-align: right;
    position: absolute;
    right: 100px;
    margin: 70px auto 300px;
    color: ${styleguide.colors.dark};
    font-size: ${styleguide.fontSize.h4};
    font-weight: 400;
  }
  
  input {
    width: 540px;
    height: 50px;
    border: 1px solid #E6E6E6;
    border-radius: 8px;
    margin-top: 275px;
    text-indent: 45px;
  }

  svg {
    position: absolute;
    margin-top: 290px;
    margin-left: 15px;
    color: ${styleguide.colors.primary};
  }
`