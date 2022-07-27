import React from "react";
import { Container, ButtonLow } from "./styled";

import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <ButtonLow>
        <AiOutlineTwitter color="white" size={20}></AiOutlineTwitter>
      </ButtonLow>
      <ButtonLow>
        <img src="img/opensea.png" alt="opensea" />
      </ButtonLow>
      <ButtonLow>
        <img src="img/etherscan.png" alt="etherscan" />
      </ButtonLow>
    </Container>
  );
};

export default Footer;
