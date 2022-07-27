/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import { Progress } from "@chakra-ui/react";

import {
  Container,
  TextBoldMiddle,
  ContainerText,
  ContainerProgress,
  ContainerInputsButton,
  CardButton,
  CardInput,
  MintButton,
} from "./styled";

import detectEthereumProvider from "@metamask/detect-provider";

import {
  getCurrentWalletConnected,
  addWalletListener,
} from "../../utils/functions/interact.js";

import { whitelist } from "../../utils/jsons/whitelist";

const contractAddress = "0x6CeAC7c9348B024f8Ac38C19218a16e920441418";

const { ethers } = require("ethers");
const contractABI = require("../../utils/jsons/contract-abi.json");

const MarketPlace = () => {
  const [quantity, setQuantity] = useState(0);
  const [walletAddress, setWalletAddress] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [price, setPrice] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [maxSupply, setMaxSupply] = useState(0);
  const [walletIsWhiteList, setWalletIsWhiteList] = useState(false);

  const calculateProgressBar = () => {
    return (totalSupply * 100) / maxSupply;
  };

  const getWhiteList = useCallback(async () => {
    if (walletAddress) {
      const useWhiteList = !!whitelist.find(
        (item) => item === `${walletAddress}`
      );

      setWalletIsWhiteList(useWhiteList);
    }
  }, [walletAddress]);

  useEffect(() => {
    getWhiteList();
  }, [getWhiteList]);

  useEffect(() => {
    async function fetchData() {
      const { address, status } = await getCurrentWalletConnected();
      setWalletAddress(address);

      setStatus(status);

      addWalletListener(setStatus, setWalletAddress);
    }
    fetchData();
  }, []);

  const calculatePrice = useCallback(async () => {
    const browserProvider = await detectEthereumProvider();
    const provider = new ethers.providers.Web3Provider(browserProvider);
    const contract = new ethers.Contract(
      contractAddress,
      contractABI,
      provider.getSigner()
    );
    const tokenPrice = await contract.cost();

    const newPrice = ethers.utils.formatEther(tokenPrice._hex);

    const conta = (newPrice * quantity).toFixed(3);

    setPrice(conta);
  }, [quantity]);

  useEffect(() => {
    calculatePrice();
  }, [quantity, calculatePrice]);

  useEffect(() => {
    if (walletAddress) {
      const getSupply = async () => {
        const browserProvider = await detectEthereumProvider();
        const provider = new ethers.providers.Web3Provider(browserProvider);
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          provider.getSigner()
        );

        const totalSupply = await contract.totalSupply();

        setTotalSupply(Number(totalSupply._hex));

        const supplyQuantity = await contract.maxSupply();

        setMaxSupply(Number(supplyQuantity._hex));
      };
      getSupply();
    }
  }, [walletAddress]);

  const mintTokens = async (mintAmount) => {
    const browserProvider = await detectEthereumProvider();
    const provider = new ethers.providers.Web3Provider(browserProvider);
    const contract = new ethers.Contract(
      contractAddress,
      contractABI,
      provider.getSigner()
    );
    const tokenPrice = await contract.cost();

    try {
      await contract.mint(mintAmount, {
        value: tokenPrice.mul(mintAmount),
      });
    } catch (e) {
      setError(e.code);
    }
  };

  return (
    <>
      <Container>
        <ContainerText>
          <TextBoldMiddle>Total Supply : {maxSupply}</TextBoldMiddle>
        </ContainerText>
        <ContainerText>
          <TextBoldMiddle>
            Supply: {totalSupply}/{maxSupply}
          </TextBoldMiddle>
        </ContainerText>
        <ContainerText>
          <TextBoldMiddle>
            Sale Status: {totalSupply === maxSupply ? "Closed" : "Open"}
          </TextBoldMiddle>
        </ContainerText>
        <ContainerText>
          <TextBoldMiddle>Price: {price}</TextBoldMiddle>
        </ContainerText>
      </Container>
      <ContainerProgress>
        <TextBoldMiddle>Progress Bar</TextBoldMiddle>
        <Progress
          value={calculateProgressBar()}
          hasStripe
          style={{ width: "80%" }}
          colorScheme="yellow"
        />
      </ContainerProgress>
      <ContainerInputsButton>
        <CardButton>
          <CardInput>
            <button
              className="card-negative"
              onClick={() => setQuantity(quantity - 1)}
            >
              -
            </button>
            <div className="card-input-number">{quantity}</div>
            <button
              className="card-positive"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </CardInput>
        </CardButton>

        <MintButton className="button-down-section" type="button">
          MINT
        </MintButton>
      </ContainerInputsButton>
    </>
  );
};

export default MarketPlace;
