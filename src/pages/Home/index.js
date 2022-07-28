/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import {
  Container,
  Paragraphy,
  ButtonSoldOut,
  TextBoldHigh,
  TextMiddle,
  ImagePet,
} from "./styled";
import Faq from "../../components/Accordion";
import Footer from "../../components/Footer";

import {
  connectWallet,
  getCurrentWalletConnected,
  addWalletListener,
} from "../../utils/functions/interact.js";

import { Link } from "react-router-dom";

const Home = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    async function fetchData() {
      const { address, status } = await getCurrentWalletConnected();
      setWalletAddress(address);

      setStatus(status);

      addWalletListener(setStatus, setWalletAddress);
    }
    fetchData();
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();

    setStatus(walletResponse.status);
    setWalletAddress(walletResponse.address);
  };
  return (
    <>
      <Container>
        <Paragraphy>ЩΣᄂᄃӨMΣ ƬӨ ƬΉΣ ΛЯΣПΛ</Paragraphy>
        {walletAddress ? (
          <Link to="/marketplace">
            <ButtonSoldOut>Mint</ButtonSoldOut>
          </Link>
        ) : (
          <ButtonSoldOut onClick={() => connectWalletPressed()}>
            Connect
          </ButtonSoldOut>
        )}

        <ImagePet src="img/Zeus.gif" alt="Zeus" />

        <TextMiddle>
          ᄃΉΛMPIӨПƧ ӨF ZΣЦƧ is a collection on ETH Blockchain based on Greek
          mythology of 10,000 warriors who fought countless battles until they
          became ᄃΉΛMPIӨПƧ .
        </TextMiddle>
        <TextBoldHigh>FΛQ</TextBoldHigh>
        <Faq />
        <TextMiddle>
          This project is a tribute to Greek mythology, an immense and vast
          mythology of thousands of years that is still remembered and
          represented today.
        </TextMiddle>
        <TextMiddle>
          Thanks for all the GӨDƧ and let the battle begin!!!
        </TextMiddle>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
