import React from 'react'

function Transaction({ transactions}) {
  return (
    <>
    <ul className='list-none'>
        {transactions.map((transaction)=>(
            <li key={Math.random()} className={`p-2 m-2 ${transaction.amount > 0 ? "bg-green-400" : "bg-red-400"}`}>
                {transaction.text}
                <span className='float-right'>{transaction.amount}</span>
            </li>
        ))}
    </ul>
    
    </>
  )
}

export default Transaction;