import React, { useState, useEffect } from "react";

export default function App() {
  const [btcData, setBtcData] = useState({});

  const fetchData = () => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((response) => response.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [user , setUser] = React.useState([]);

  const fetchData2 = () => {
    fetch("https://randomuser.me/api/?reults=1")
      .then((response) => response.json())
      .then(data => setUser(data));
  };

  useEffect(() => {
    fetchData2();
  }, []);

  const USD = () =>{
    return (
      <div>
    <>
      <h1>Current BTC/USD data</h1>
      <p>Code: {btcData.code}</p>
      <p>Symbol: {btcData.symbol}</p>
      <p>Rate: {btcData.rate}</p>
      <p>Description: {btcData.description}</p>
      <p>Rate Float: {btcData.rate_float}</p>
    </>
    </div>
    )
  }
  return Object.keys(user).length > 0 ? (<div>
    <h1>Data retured</h1>
    <h2>First name : {user.results[0].name.first}</h2>
    <h2>LAst name : {user.results[0].name.last}</h2>
    <br></br>
    <USD/>
  </div>
  ) : <h1>DAta pending</h1>
}
