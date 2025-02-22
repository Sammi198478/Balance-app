import React from 'react'

function InCome({income, expense}) {
  return (
    <>
    <div className='flex justify-around'>
    <div className='text-green-600'>
        <h3>Total Income</h3>
        <p className='text-xl'>{income}</p>
    </div>
    <div className='text-red-600'>
      <h3>Expenses</h3>
      <p className='text-xl'>{expense}</p>
    </div>
</div>
</>
  )
}

export default InCome;

