import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Logo from './ethereumlogo.svg'





export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h3>CURRENT BALANCE</h3>  
    <h1>${total}</h1>
    <h1>
    <img src={Logo} style={{ width: 80, height: 80 }} alt="react-logo" />
    </h1>

    </>
  )
}