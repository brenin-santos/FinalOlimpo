import React from "react";
import {
  Container,
  ContainerSectionImage,
  ContainerSectionButtonsList,
  ButtonHigh,
  ButtonLow,
} from "./styled";

import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <ContainerSectionImage>
        <Link to={"/"}>
          <img
            src="img/champion.png"
            alt="Champion Of Zeus"
            className="image--header"
          />
        </Link>
      </ContainerSectionImage>
      <ContainerSectionButtonsList>
        <ButtonHigh>
          <Link to={"/marketplace"}>Market</Link>
        </ButtonHigh>
        <ButtonLow>
          <AiOutlineTwitter color="white" size={20}></AiOutlineTwitter>
        </ButtonLow>
        <ButtonLow>
          <img src="img/opensea.png" alt="opensea" />
        </ButtonLow>
        <ButtonLow>
          <img src="img/etherscan.png" alt="etherscan" />
        </ButtonLow>
      </ContainerSectionButtonsList>
    </Container>
  );
};

export default Header;
