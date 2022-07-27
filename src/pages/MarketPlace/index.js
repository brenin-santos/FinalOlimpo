/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import { Progress, Toast } from "@chakra-ui/react";

import {
  Container,
  TextBoldMiddle,
  ContainerText,
  ContainerProgress,
  ContainerInputsButton,
  CardButton,
  CardInput,
  MintButton,
  ContainerWalletAddress,
} from "./styled";

import detectEthereumProvider from "@metamask/detect-provider";

import { getDate, getHours } from "date-fns";

import { toast } from "react-toastify";

import {
  getCurrentWalletConnected,
  addWalletListener,
} from "../../utils/functions/interact.js";

import { whitelist } from "../../utils/jsons/whitelist";

const MarketPlace = () => {
  const [quantity, setQuantity] = useState(1);
  const [walletAddress, setWalletAddress] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [price, setPrice] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [maxSupply, setMaxSupply] = useState(0);
  const [walletIsWhiteList, setWalletIsWhiteList] = useState(false);
  const [mintOption, setMintOption] = useState("public");

  const { ethers } = require("ethers");
  const contractABI = require("../../utils/jsons/contract-abi.json");
  const contractAddress = "0x6CeAC7c9348B024f8Ac38C19218a16e920441418";

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
  }, [
    contractABI,
    ethers.Contract,
    ethers.providers.Web3Provider,
    ethers.utils,
    quantity,
  ]);

  useEffect(() => {
    calculatePrice();
  }, [quantity, calculatePrice]);

  const getSupply = useCallback(async () => {
    const browserProvider = await detectEthereumProvider();
    const provider = new ethers.providers.Web3Provider(browserProvider);
    const contract = new ethers.Contract(
      contractAddress,
      contractABI,
      provider.getSigner()
    );

    const totalSupply = await contract.totalSupply();

    setTotalSupply(Number(totalSupply._hex));

    const supplyQuantity = await contract.currentMaxSupply();

    setMaxSupply(Number(supplyQuantity._hex));
  }, [contractABI, ethers.Contract, ethers.providers.Web3Provider]);

  //

  useEffect(() => {
    if (walletAddress) {
      getSupply();
    }
  }, [getSupply, walletAddress]);

  useEffect(() => {
    if (mintOption === "public") {
      if (quantity === 0) {
        setQuantity(1);
      }
      if (quantity > 4) {
        setQuantity(4);
      }
    } else if (mintOption === "whitelist") {
      if (quantity === 0) {
        setQuantity(1);
      }
      if (quantity > 2) {
        setQuantity(2);
      }
    } else {
      if (quantity === 0) {
        setQuantity(1);
      }
      if (quantity > 4) {
        setQuantity(4);
      }
    }
  }, [quantity, mintOption]);

  const handleMintWithCalculateHours = useCallback(() => {
    const currentDate = getDate(new Date());
    const currentHour = getHours(new Date());

    if (currentDate === 28) {
      if (currentHour >= 11 && currentHour <= 14) {
        setMintOption("public");
      } else if (currentHour >= 14 && currentHour <= 23) {
        setMintOption("whitelist");
      }
    } else if (currentDate === 29) {
      if (currentHour >= 0 && currentHour <= 2) {
        setMintOption("whitelist");
      } else {
        setMintOption("public");
      }
    } else {
      setMintOption("whitelist");
    }
  }, []);

  useEffect(() => {
    handleMintWithCalculateHours();
  }, [handleMintWithCalculateHours]);

  const mintTokens = async (mintAmount) => {
    if (mintOption === "public") {
      const browserProvider = await detectEthereumProvider();
      const provider = new ethers.providers.Web3Provider(browserProvider);
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        provider.getSigner()
      );
      const tokenPrice = await contract.cost();

      try {
        await contract.mint(quantity, {
          value: tokenPrice,
        });
      } catch (e) {
        toast.error(e.message);
      }
    } else if (mintOption === "whitelist" && walletIsWhiteList) {
      const browserProvider = await detectEthereumProvider();
      const provider = new ethers.providers.Web3Provider(browserProvider);
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        provider.getSigner()
      );
      const tokenPrice = await contract.cost();

      const balanceOf = await contract.balanceOf(walletAddress);

      const newBalanceOf = ethers.utils.formatEther(balanceOf._hex);

      // eslint-disable-next-line eqeqeq
      if (newBalanceOf == "0.000000000000000002") {
        toast("Limite de MINT FREE alcançado.");
      } else {
        try {
          await contract.mint(quantity, {
            value: 0,
          });
        } catch (e) {
          toast.error(e.message);
        }
      }
    } else {
      const browserProvider = await detectEthereumProvider();
      const provider = new ethers.providers.Web3Provider(browserProvider);
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        provider.getSigner()
      );
      const tokenPrice = await contract.cost();

      try {
        await contract.mint(quantity, {
          value: tokenPrice,
        });
      } catch (e) {
        toast.error(e.message);
      }
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
          <TextBoldMiddle>
            Price: {mintOption === "whitelist" ? "2 FREE" : price}
          </TextBoldMiddle>
        </ContainerText>
      </Container>
      <ContainerWalletAddress>
        <TextBoldMiddle>walletAddress: {walletAddress}</TextBoldMiddle>
      </ContainerWalletAddress>
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
              onClick={() => {
                if (mintOption === "public") {
                  if (quantity > 1 && quantity < 5) {
                    setQuantity(quantity - 1);
                  }
                } else if (mintOption === "whitelist") {
                  if (quantity > 1 && quantity < 3) {
                    setQuantity(quantity - 1);
                  }
                } else {
                  if (quantity > 1 && quantity < 5) {
                    setQuantity(quantity - 1);
                  }
                }
              }}
            >
              -
            </button>
            <div className="card-input-number">{quantity}</div>
            <button
              className="card-positive"
              onClick={() => {
                if (mintOption === "public") {
                  if (quantity >= 1 && quantity <= 4) {
                    setQuantity(quantity + 1);
                  }
                } else if (mintOption === "whitelist") {
                  if (quantity >= 1 && quantity <= 2) {
                    setQuantity(quantity + 1);
                  }
                }
              }}
            >
              +
            </button>
          </CardInput>
        </CardButton>

        <MintButton
          className="button-down-section"
          type="button"
          onClick={() => mintTokens(quantity)}
        >
          MINT
        </MintButton>
      </ContainerInputsButton>
    </>
  );
};

export default MarketPlace;
