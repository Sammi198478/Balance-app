
import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Balance from './component/Balance'
import Transaction from './component/Transaction'
import AddTransaction from './component/AddTransaction'
import InCome from './component/InCome'


function App() {
  const[transactions, setTransactions] = useState([])

  const addTransaction = (transaction )=>{
    setTransactions([...transactions, transaction ])
  }

  const calculateBalance = ()=>{
    return transactions.reduce((acc, transaction)=> acc + transaction.amount, 0)
  }

  const calculateIncome = ()=>{
    return transactions
    .filter((transaction)=> transaction.amount > 0)
    .reduce((acc, transaction)=> acc + transaction.amount, 0)
  }

  const calculateExpenses = ()=>{
    return transactions
    .filter((transaction)=> transaction.amount <0)
    .reduce((acc, transaction)=> acc + transaction.amount, 0)
  }
 

  return (
    <>
     <Header/> 
     <Balance balance={calculateBalance()}/>
     <InCome income={calculateIncome ()} expense={calculateExpenses()}/>
     <Transaction transactions={transactions}/>
     <AddTransaction addTransaction={addTransaction}/>
    </>
  )
}

export default App
