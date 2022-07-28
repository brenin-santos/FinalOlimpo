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
  Banner,
} from "./styled";

import { connectWallet } from "../../utils/functions/interact.js";

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
  const [maxTotalSupply, setMaxTotalSupply] = useState(0);
  const [maxSupply, setMaxSupply] = useState(0);
  const [walletIsWhiteList, setWalletIsWhiteList] = useState(false);
  const [mintOption, setMintOption] = useState("public");

  const { ethers } = require("ethers");
  const contractABI = require("../../utils/jsons/contract-abi.json");
  const contractAddress = "0x6CeAC7c9348B024f8Ac38C19218a16e920441418";

  const calculateProgressBar = () => {
    if (walletAddress) {
      return (totalSupply * 100) / maxSupply;
    }
  };

  const getWhiteList = useCallback(async () => {
    if (walletAddress) {
      const useWhiteList = !!whitelist.find(
        (item) => item.toLowerCase() === walletAddress.toLowerCase()
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

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();

    setStatus(walletResponse.status);
    setWalletAddress(walletResponse.address);
  };

  const calculatePrice = useCallback(async () => {
    if (walletAddress) {
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
    }
  }, [
    contractABI,
    ethers.Contract,
    ethers.providers.Web3Provider,
    ethers.utils,
    quantity,
    walletAddress,
  ]);

  useEffect(() => {
    calculatePrice();
  }, [quantity, calculatePrice]);

  const getSupply = useCallback(async () => {
    if (walletAddress) {
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

      const newTotalSupply = await contract.maxSupply();

      setMaxTotalSupply(Number(newTotalSupply._hex));
    }
  }, [
    contractABI,
    ethers.Contract,
    ethers.providers.Web3Provider,
    walletAddress,
  ]);

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
        toast.error("Quantity of Mint Reached the limit");
      }
    } else if (mintOption === "whitelist") {
      if (quantity === 0) {
        setQuantity(1);
      }
      if (quantity > 2) {
        toast.error("Quantity of Mint Reached the limit");
        setQuantity(2);
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
      setMintOption("public");
    }
  }, []);

  useEffect(() => {
    handleMintWithCalculateHours();
  }, [handleMintWithCalculateHours]);

  ///// Testar essa funcao
  const mintTokens = async (mintAmount) => {
    if (walletAddress) {
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
          await contract.mint(mintAmount, {
            value: tokenPrice.mul(mintAmount),
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

        const balanceOf = await contract.balanceOf(
          "0x64B1d53951E7750c09e9d3357Ac2774504C30315"
        );

        const newBalanceOf = ethers.utils.formatEther(balanceOf._hex);

        // eslint-disable-next-line eqeqeq
        if (newBalanceOf == "0.000000000000000002") {
          toast.error("Limit Of MINT FREE Reached.");
        } else {
          try {
            await contract.mint(mintAmount, {
              value: 0,
            });
          } catch (e) {
            toast.error(e.message);
          }
        }
      }
    }
  };

  return (
    <>
      <Container>
        <ContainerText>
          <TextBoldMiddle>Total Supply : {maxTotalSupply}</TextBoldMiddle>
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
        <TextBoldMiddle>Wallet Address: {walletAddress}</TextBoldMiddle>
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

        {walletAddress ? (
          <MintButton
            className="button-down-section"
            type="button"
            onClick={() => {
              if (walletAddress) {
                mintTokens(quantity);
              } else {
                toast.error("Please, Connect your metamask wallet!!!!");
              }
            }}
          >
            MINT
          </MintButton>
        ) : (
          <MintButton
            className="button-down-section"
            type="button"
            onClick={() => {
              connectWalletPressed();
            }}
          >
            Connect
          </MintButton>
        )}
      </ContainerInputsButton>
      <Banner>Public: 4 p/tx WL: 2 free p/tx</Banner>
    </>
  );
};

export default MarketPlace;
