import React from "react";
import { Container, ButtonLow } from "./styled";

import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <ButtonLow>
        <a href="https://twitter.com">
          <AiOutlineTwitter color="white" size={20}></AiOutlineTwitter>
        </a>
      </ButtonLow>
      <ButtonLow>
        <a href="https://twitter.com">
          <img src="img/opensea.png" alt="opensea" />
        </a>
      </ButtonLow>
      <ButtonLow>
        <a href="https://twitter.com">
          <img src="img/etherscan.png" alt="etherscan" />
        </a>
      </ButtonLow>
    </Container>
  );
};

export default Footer;
