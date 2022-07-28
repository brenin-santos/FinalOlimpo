import React, { useState, useEffect } from "react";
import {
  Container,
  ContainerSectionImage,
  ContainerSectionButtonsList,
  ButtonHigh,
  ButtonLow,
} from "./styled";

import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  getCurrentWalletConnected,
  addWalletListener,
} from "../../utils/functions/interact";

const Header = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [status, setStatus] = useState();

  useEffect(() => {
    async function fetchData() {
      const { address, status } = await getCurrentWalletConnected();
      setWalletAddress(address);

      setStatus(status);

      addWalletListener(setStatus, setWalletAddress);
    }
    fetchData();
  }, []);

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
        {walletAddress ? (
          <ButtonHigh>
            <Link to={"/marketplace"}>Market</Link>
          </ButtonHigh>
        ) : (
          <></>
        )}

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
      </ContainerSectionButtonsList>
    </Container>
  );
};

export default Header;
