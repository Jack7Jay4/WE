import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [date, setDate] = useState(null);
  // useEffect(() => {
  //   async function getDate() {
  //     const res = await fetch("/api/date");
  //     const newDate = await res.text();
  //     setDate(newDate);
  //   }
  //   getDate();
  // }, []);
  return (
    <main>
      <h1>Via NFT</h1>
      <iframe
          src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc1155.html?contract=0xb8AA7C6fa22fd8F42C0Cbf49f95DA93328b5EDaB&chain=%7B%22name%22%3A%22Goerli%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fgoerli.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Goerli+Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22gor%22%2C%22chainId%22%3A5%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22goerli%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fethereum%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=77874c55a11a77c96c7575d597c85f65&tokenId=0&theme=light&primaryColor=purple"
          width="600px"
          height="600px"
          style="max-width:100%;"
          frameborder="0"
      ></iframe>

    </main>
  );
}

export default App;
