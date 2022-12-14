export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "ππ½ Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "π₯ " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            π¦{" "}
            <a href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};
export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "ππ½ Write a message in the text-field above.",
        };
      } else {
        return {
          address: "",
          status: "π¦ Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "π₯ " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status:
        "You must install Metamask, a virtual Ethereum wallet, in your Γbrowser.",
    };
  }
};
export const addWalletListener = (setWalletAddress, setStatus) => {
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        setStatus("ππ½ Write a message in the text-field above.");
      } else {
        setWalletAddress("");
        setStatus("π¦ Connect to Metamask using the top right button.");
      }
    });
  } else {
    setStatus(
      "You must install Metamask, a virtual Ethereum wallet, in your browser."
    );
  }
};
